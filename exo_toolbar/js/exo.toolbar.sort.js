"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}!function(r,i){var e=new(function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"attach",value:function(t){var o=this;this.toolbar=t,this.$sortables=this.getSortables(t),this.$sections=t.getSections().elements(),this.$sortables.addClass("exo-toolbar-sortable"),this.$sections.sortable({items:".exo-toolbar-sortable",connectWith:".exo-toolbar-section",placeholder:"exo-toolbar-sort-placeholder",forcePlaceholderSize:!0,tolerance:"pointer",helper:"clone",forceHelperSize:!0,appendTo:r("body"),opacity:.9,scroll:!1,cursor:"move",start:function(t,e){return o.onSortableStart(t,e)},stop:function(t,e){return o.onSortableStop(t,e)},update:function(t,e){return o.onSortableUpdate(t,e)}}),this.$sortables.disableSelection()}},{key:"getSortables",value:function(t){var e=[];return t.getItems().each(function(t){t.allowSort()&&e.push(t.getSelector())}),r(e.join(", "))}},{key:"onSortableStart",value:function(t,e){this.$sections.each(function(t,e){var o=r(e).find(".exo-toolbar-create");r(e).css({minHeight:o.outerHeight(),minWidth:o.outerWidth()})}),this.toolbar.getElement().addClass("exo-toolbar-sorting"),this.toolbar.disableAsides()}},{key:"onSortableStop",value:function(t,e){this.$sections.css({minHeight:"",minWidth:""}),this.toolbar.getElement().removeClass("exo-toolbar-sorting"),this.toolbar.enableAsides(),this.toolbar.positionAsides()}},{key:"onSortableUpdate",value:function(t,e){var t=r(t.target).data("exo-section-id"),o=this.toolbar.getItem(e.item.data("exo-item-id")),e=this.toolbar.getSection(e.item.closest(".exo-toolbar-section").data("exo-section-id"));o&&e&&e.getId()===t&&(o.setSectionId(e.getBaseId()),o.setRegionId(e.getRegionId()),e.orderItems(),t=e.getItems(),r.ajax({url:i.url("api/exo/toolbar/items/update"),type:"POST",data:JSON.stringify(t.getData()),dataType:"json",success:function(t){}}))}}]),t}());i.behaviors.exoToolbarSort={attach:function(t){i.ExoToolbar.isAdminMode()&&i.ExoToolbar.isReady().then(function(t){t.each(function(t){e.attach(t)})})}}}(jQuery,(_,Drupal),drupalSettings);