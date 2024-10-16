/**
 * @file
 * This file is only used to provide typings and interfaces and is not output
 * as javascript.
 */

declare var TSinclude:any;
declare var Drupal:DrupalInterface;
declare var drupalSettings:any;
declare var displace:any;
declare var debounce:any;
declare var Modernizr:any;
declare var autosize:any;
declare var loadCSS:any;
declare var onloadCSS:any;
declare var bodyScrollLock:BodyScrollLock;
declare var noUiSlider:any;
declare var Sortable:any;
declare var Swiper:any;
declare var SplitType:any;
declare var once:any;
declare var Fuse:any;
declare var turnstile:any;

interface JQuery {
  once(id?): JQuery;
  removeOnce(id?): JQuery;
  findOnce(id?): JQuery;
  imagesLoaded:any;
  overlaps:any;
}

interface BodyScrollLock {
  lock?: any;
  unlock?: any;
}

interface Window {
  jQuery: any;
  drupalSettings: any;
  MSStream: any;
  opera: any;
  safari: any;
  Shuffle: any;
  countUp: any;
}

interface Document {
  documentMode?: any;
}

interface DrupalInterface {
  [s: string]: any;
  Exo: Exo;
  ExoDisplace: ExoDisplace;
}

interface ExoSettingInstance {
  new(string): any
}

interface ExoSettingsGroupInterface {
  [s: string]: any;
}

interface ExoDisplaceOffsetsInterface {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

interface ExoShadowOptionsInterface {
  opacity?:number;
  onClick?:Function;
}

interface ExoCallbacks {
  [s: string]: Function;
}

interface ExoConstructable<T> {
  new() : T;
}
