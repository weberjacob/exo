<?php

namespace Drupal\exo_alchemist\Plugin\ExoComponentField;

use Drupal\Component\Plugin\Exception\PluginException;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\RevisionableInterface;
use Drupal\Core\Field\FieldItemInterface;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\exo_alchemist\ExoComponentManager;
use Drupal\exo_alchemist\ExoComponentValue;
use Drupal\exo_alchemist\ExoComponentValues;
use Drupal\exo_alchemist\Plugin\ExoComponentFieldInterface;
use Drupal\field\FieldConfigInterface;
use Drupal\field\FieldStorageConfigInterface;
use Drupal\layout_builder\LayoutEntityHelperTrait;

/**
 * A 'sequence' adapter for exo components.
 *
 * @ExoComponentField(
 *   id = "sequence",
 *   label = @Translation("Sequence"),
 * )
 */
class Sequence extends EntityReferenceBase {
  use LayoutEntityHelperTrait;

  /**
   * The entity type to reference.
   *
   * @var string
   */
  protected $entityType = ExoComponentManager::ENTITY_TYPE;

  /**
   * Component definition.
   *
   * @var \Drupal\exo_alchemist\Definition\ExoComponentDefinition
   *   The component definition.
   */
  protected $componentDefinition;

  /**
   * The parent component's modifier attributes.
   *
   * @var array
   *   An array of attributes.
   */
  protected $parentModifierAttributes;

  /**
   * {@inheritdoc}
   */
  public function processDefinition() {
    parent::processDefinition();
    $field = $this->getFieldDefinition();
    if (!$field->hasAdditionalValue('sequence_fields')) {
      throw new PluginException(sprintf('eXo Component Field plugin (%s) requires [fields] be set.', $field->getType()));
    }

    $component_definition = $this->getComponentDefinition();

    // Merge in base defaults.
    foreach ($field->getDefaults() as $default) {
      $temp_component_definition = clone $component_definition;
      foreach ($field->getAdditionalValue('sequence_fields') as $sequence_field_name => $sequence_field) {
        $default_value = $default->getValue($sequence_field_name);
        $sequence_default_value = $sequence_field['default'] ?? NULL;
        $temp_component_definition->getField($sequence_field_name)->setDefaults($default_value);
        // Make sure field is valid.
        if ($sequence_field_name === 'value') {
          // Support subfields named 'value'. The 'value' value is always set
          // and will be used by the sequence. As a result, we set the default
          // to _value which is used in getComponentDefinitionWithValue().
          $default->setValue('_value', $default_value !== TRUE ? $default_value : $sequence_default_value);
        }
        elseif (!empty($sequence_field['default']) && empty($default->getValue($sequence_field_name))) {
          $default->setValue($sequence_field_name, $sequence_field['default']);
        }
      }
      $temp_definition = $temp_component_definition->toArray();
      $this->exoComponentManager()->processDefinition($temp_definition, $temp_definition['id']);
    }

    $definition = $component_definition->toArray();
    $this->exoComponentManager()->processDefinition($definition, $definition['id']);
  }

  /**
   * {@inheritdoc}
   */
  public function getWidgetConfig() {
    // Sequence fields should never be able to be edited via a widget.
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function onFieldChanges(array &$changes, ExoComponentFieldInterface $from_field, FieldStorageConfigInterface $from_storage = NULL, FieldConfigInterface $from_config = NULL) {
    /** @var \Drupal\exo_alchemist\Plugin\ExoComponentField\Sequence $from_field */
    $component_definition = $this->getComponentDefinition();
    $sequence_changes = $this->exoComponentManager()->getExoComponentFieldManager()->getEntityBundleFieldChanges($component_definition, $from_field->getComponentDefinition());
    if (!empty(array_filter($sequence_changes))) {
      $changes['update'][$component_definition->getName()] = $this->getFieldDefinition();
    }
  }

  /**
   * {@inheritdoc}
   */
  public function onFieldInstall() {
    parent::onFieldInstall();

    $component = $this->getComponentDefinition();
    $this->exoComponentManager()->installEntityType($component);
  }

  /**
   * {@inheritdoc}
   */
  public function onFieldUpdate() {
    parent::onFieldUpdate();
    $component = $this->getComponentDefinition();
    $this->exoComponentManager()->updateEntityType($component);
    // On update, we need to make sure we build the entity.
    $values = ExoComponentValues::fromFieldDefaults($this->getFieldDefinition());
    foreach ($values as $value) {
      $this->exoComponentManager()->buildEntity($this->getComponentDefinitionWithValue($value));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function onFieldUninstall() {
    parent::onFieldUninstall();
    $component = $this->getComponentDefinition();
    $this->exoComponentManager()->uninstallEntityType($component);
  }

  /**
   * {@inheritdoc}
   */
  public function onDraftUpdateLayoutBuilderEntity(FieldItemListInterface $items) {
    if ($items->count()) {
      $this->deepSerializeEntity($items);
    }
  }

  /**
   * Workaround for deep serialization.
   *
   * @param \Drupal\Core\Field\FieldItemListInterface $items
   *   The field items.
   */
  protected function deepSerializeEntity(FieldItemListInterface $items) {
    // This is an ugly workaround of the lack of deep serialization. Entities
    // nested more than 1 level are never serialized and we therefore set
    // these entities as "new" so that they are serialized and then we set
    // them back here.
    // @see \Drupal\exo_alchemist\ExoComponentGenerator::handleComponentEntityPreSave().
    // @see https://www.drupal.org/project/drupal/issues/2824097
    // @todo Remove when patch added to core.
    foreach ($items as $delta => $item) {
      if ($item->entity) {
        if (!$item->entity->isNew()) {
          $child_definition = $this->exoComponentManager()->getEntityComponentDefinition($item->entity);
          foreach ($child_definition->getFields() as $field) {
            $this->exoComponentManager()->onDraftUpdateLayoutBuilderEntity($child_definition, $item->entity);
          }
          $item->entity->enforceIsNew();
          $item->setValue([
            'target_id' => NULL,
            'entity' => $item->entity,
          ]);
        }
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  public function getDefaultValue($delta = 0) {
    $field = $this->getFieldDefinition();
    $value = new ExoComponentValue($field, [
      '_delta' => $delta,
    ]);
    if ($entity = $this->getValueEntity($value)) {
      $value = [
        'target_id' => $entity->id(),
      ];
      if ($entity instanceof RevisionableInterface) {
        $value['target_revision_id'] = $entity->getRevisionId();
      }
      return $value;
    }
    return NULL;
  }

  /**
   * {@inheritdoc}
   */
  public function viewValue(FieldItemInterface $item, $delta, array $contexts) {
    $value = parent::viewValue($item, $delta, $contexts);
    $entity = $this->getReferencedEntity($item, $contexts);
    if ($entity) {
      $field = $this->getFieldDefinition();
      $component = $this->getComponentDefinition();
      $component->addParentFieldDelta($field, $delta);
      $value += $this->exoComponentManager()->viewEntityValues($component, $item->entity, $contexts);
    }
    return $value;
  }

  /**
   * {@inheritdoc}
   */
  protected function onCloneValue(FieldItemInterface $item, $all) {
    $component = $this->getComponentDefinition();
    return $this->exoComponentManager()->cloneEntity($component, $item->entity);
  }

  /**
   * {@inheritdoc}
   */
  public function onFieldRestore(ExoComponentValues $values, FieldItemListInterface $items) {
    $field_values = [];
    if ($items->isEmpty()) {
      $field_values = parent::onFieldRestore($values, $items);
    }
    else {
      $component = $this->getComponentDefinition();
      foreach ($items as $delta => $item) {
        $component->addParentFieldDelta($this->getFieldDefinition(), $delta);
        if ($item->entity) {
          $field_values[] = $this->exoComponentManager()->restoreEntity($component, $item->entity);
        }
      }
    }
    return $field_values;
  }

  /**
   * {@inheritdoc}
   */
  public function onPreSaveLayoutBuilderEntity(FieldItemListInterface $items, EntityInterface $parent_entity) {
    parent::onPreSaveLayoutBuilderEntity($items, $parent_entity);
    $component = $this->getComponentDefinition();
    foreach ($items as $delta => $item) {
      $component->addParentFieldDelta($this->getFieldDefinition(), $delta);
      $entity = $item->entity;
      if ($entity) {
        if ($entity instanceof RevisionableInterface) {
          $entity->setNewRevision();
        }
        $this->exoComponentManager()->getExoComponentFieldManager()->onPreSaveLayoutBuilderEntity($component, $entity, $parent_entity);
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  public function onPostSaveLayoutBuilderEntity(FieldItemListInterface $items, EntityInterface $parent_entity) {
    parent::onPostSaveLayoutBuilderEntity($items, $parent_entity);
    $sequence_entity = $items->getEntity();
    $component = $this->getComponentDefinition();
    foreach ($items as $delta => $item) {
      $component->addParentFieldDelta($this->getFieldDefinition(), $delta);
      $entity = $item->entity;
      if ($entity) {
        $this->exoComponentManager()->getExoComponentFieldManager()->onPostSaveLayoutBuilderEntity($component, $entity, $parent_entity);
        // We need to save usage.
        \Drupal::service('inline_block.usage')->addUsage($entity->id(), $sequence_entity);
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  public function onPostDeleteLayoutBuilderEntity(FieldItemListInterface $items, EntityInterface $parent_entity) {
    parent::onPostDeleteLayoutBuilderEntity($items, $parent_entity);
    $sequence_entity = $items->getEntity();
    $component = $this->getComponentDefinition();
    foreach ($items as $delta => $item) {
      $component->addParentFieldDelta($this->getFieldDefinition(), $delta);
      $entity = $item->entity;
      if ($entity) {
        $this->exoComponentManager()->getExoComponentFieldManager()->onPostDeleteLayoutBuilderEntity($component, $entity, $parent_entity);
        // We need to remove usage.
        \Drupal::service('inline_block.usage')->removeByLayoutEntity($sequence_entity);
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  protected function getValueEntity(ExoComponentValue $value, FieldItemInterface $item = NULL) {
    $component = $this->getComponentDefinitionWithValue($value);
    $entity = $this->exoComponentManager()->loadEntity($component);
    if (!$entity) {
      $entity = $this->exoComponentManager()->buildEntity($component);
    }
    else {
      $this->exoComponentManager()->populateEntity($component, $entity);
    }
    return $entity;
  }

  /**
   * {@inheritdoc}
   */
  public function propertyInfo() {
    $component = $this->getComponentDefinition();
    $info = $this->exoComponentManager()->getPropertyInfo($component);
    $properties = parent::propertyInfo();
    foreach ($info as $key => $data) {
      if ($key !== '_global') {
        $properties += $data['properties'];
      }
    }
    return $properties;
  }

  /**
   * {@inheritdoc}
   */
  public function getRequiredPaths() {
    $paths = [];
    $field = $this->getFieldDefinition();
    $component = $this->getComponentDefinition();
    $count = $field->getCardinality() > 1 ? $field->getCardinality() : 1;
    for ($delta = 0; $delta < $count; $delta++) {
      $component->addParentFieldDelta($field, $delta);
      $paths = array_merge($paths, $this->exoComponentManager()->getExoComponentFieldManager()->getRequiredPaths($component));
    }
    return $paths;
  }

  /**
   * Get the component definition.
   *
   * @return \Drupal\exo_alchemist\Definition\ExoComponentDefinition
   *   The component definition.
   */
  public function getComponentDefinition() {
    if (!isset($this->componentDefinition)) {
      $field = $this->getFieldDefinition();
      $definition = [
        'id' => $field->id(),
        'label' => $field->getComponent()->getLabel() . ': ' . $field->getLabel(),
        'description' => 'A sequenced item.',
        'fields' => $field->getAdditionalValue('sequence_fields'),
        'modifier' => $field->getAdditionalValue('sequence_modifier'),
        'modifiers' => [],
        'modifier_globals' => FALSE,
        'enhancements' => [],
        'computed' => TRUE,
      ] + $field->toArray() + $field->getComponent()->toArray();
      // Sequence fields do not need to be inherited.
      unset($definition['additional']['sequence_fields']);
      unset($definition['additional']['sequence_modifier']);
      $this->exoComponentManager()->processDefinition($definition, $this->getPluginId());
      /** @var \Drupal\exo_alchemist\Definition\ExoComponentDefinition $definition */
      $definition->addParentField($field);
      $this->componentDefinition = $definition;
    }
    return $this->componentDefinition;
  }

  /**
   * Get the component definition with set values.
   *
   * @param \Drupal\exo_alchemist\ExoComponentValue $value
   *   The component value.
   *
   * @return \Drupal\exo_alchemist\Definition\ExoComponentDefinition
   *   The component definition.
   */
  protected function getComponentDefinitionWithValue(ExoComponentValue $value) {
    $field = $this->getFieldDefinition();
    $definition = clone $this->getComponentDefinition();
    $definition->addParentFieldDelta($field, $value->getDelta());
    // When passed with a value, we want to make sure the defaults are set
    // correctly.
    $definition->setAdditionalValue('_delta', $value->getDelta());
    foreach ($definition->getFields() as $subfield) {
      $name = $subfield->getName();
      // Support subfields named 'value'. The 'value' value is always set
      // and will be used by the sequence. As a result, we use the _value which
      // is set in processDefinition().
      if ($name === 'value') {
        $name = '_value';
      }
      $subfield->setDefaults($value->get($name));
      $subfield->setComponent($definition);
    }
    // Because we are dynamically settings the default values, we need to let
    // the field manager process these values to make sure they are correct.
    $this->exoComponentManager()->getExoComponentFieldManager()->processComponentDefinition($definition);
    return $definition;
  }

  /**
   * Get the eXo component manager.
   *
   * @return \Drupal\exo_alchemist\ExoComponentManager
   *   The eXo component manager.
   */
  public function exoComponentManager() {
    if (!isset($this->exoComponentManager)) {
      $this->exoComponentManager = \Drupal::service('plugin.manager.exo_component');
    }
    return $this->exoComponentManager;
  }

  /**
   * Get the entity type.
   */
  protected function getEntityTypeBundles() {
    return [$this->getFieldDefinition()->safeId()];
  }

  /**
   * Create a sequence entity.
   *
   * @param array $values
   *   Values should be an array of component field name => value.
   */
  public function createSequenceEntity(array $values) {
    $sequence_definition = $this->getComponentDefinition();
    $new_values = [
      'type' => $sequence_definition->safeId(),
    ];
    foreach ($values as $key => $value) {
      if ($field = $sequence_definition->getField($key)) {
        $new_values[$field->getFieldName()] = $value;
      }
    }
    return $this->entityTypeManager()->getStorage(ExoComponentManager::ENTITY_TYPE)->create($new_values);
  }

}
