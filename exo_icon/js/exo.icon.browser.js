"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0===o)return("string"===t?String:Number)(e);o=o.call(e,t||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,o){var n=_superPropBase(e,t);if(n)return(n=Object.getOwnPropertyDescriptor(n,t)).get?n.get.call(arguments.length<3?e:o):n.value}).apply(this,arguments)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(o){var n=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(o);return _possibleConstructorReturn(this,n?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(c,n,s){var i=function(){_inherits(i,ExoData);var o=_createSuper(i);function i(e,t){return _classCallCheck(this,i),(e=o.call(this,e)).defaults={onBuild:function(){},onSelect:function(){}},e.category="all",e.searchQuery="",e.limit=80,e.page=1,e.selected="",e.events={build:new ExoEvent,select:new ExoEvent},e.$element=t,e}return _createClass(i,[{key:"build",value:function(o){var n=this;return new Promise(function(t,e){o=_.extend({},n.defaults,o),_get(_getPrototypeOf(i.prototype),"build",n).call(n,o).then(function(e){null!==e&&(n.event("build").trigger(n),n.callCallback("onBuild"),s.exoIcon.field)&&s.exoIcon.field.emptyIcon&&--n.limit,t(e)},e)})}},{key:"afterBuild",value:function(){this.$categories=this.$element.find(".exo-icon-browser-category-select"),this.$icons=this.$element.find(".exo-icon-browser-icons"),this.$pager=this.$element.find(".exo-icon-browser-pager"),this.$pagerPrev=this.$element.find(".exo-icon-browser-pager-prev"),this.$pagerNext=this.$element.find(".exo-icon-browser-pager-next"),this.$search=this.$element.find(".exo-icon-browser-search-input"),this.$infoPages=this.$element.find(".exo-icon-browser-info-pages"),this.$infoTotal=this.$element.find(".exo-icon-browser-info-total"),this.buildCategories(),this.buildIcons(),this.buildPager(),this.buildSearch()}},{key:"buildCategories",value:function(){var t=this;this.$categories.on("change",function(e){t.category=t.$categories.val().toString(),t.buildIcons()})}},{key:"buildPager",value:function(){var t=this;this.$pagerPrev.once("exo.icon").on("click",function(e){t.$pagerPrev.hasClass("disabled")||(t.page--,t.placeIcons())}),this.$pagerNext.once("exo.icon").on("click",function(e){t.$pagerNext.hasClass("disabled")||(t.page++,t.placeIcons())}),this.togglePager()}},{key:"togglePager",value:function(){1===this.page?this.$pagerPrev.addClass("disabled"):this.$pagerPrev.removeClass("disabled"),this.limit*this.page>this.icons.length?this.$pagerNext.addClass("disabled"):this.$pagerNext.removeClass("disabled")}},{key:"buildSearch",value:function(){var t=this;this.$search.once("exo.icon").focus().on("keyup",function(e){clearTimeout(t.searchTimer),t.searchTimer=setTimeout(function(){t.searchQuery=t.$search.val().toString().toLowerCase(),t.buildIcons()},300)})}},{key:"buildIcons",value:function(){var t=this;this.icons=[],this.get("packages").forEach(function(e){"all"!==t.category&&t.category!==e||(t.icons=t.icons.concat(t.getIconsByPackageId(e)))}),""!==this.searchQuery&&(this.icons=this.icons.filter(function(e){return-1<e.match(/data-icon-id="(.*?)"/)[1].replace(/-/g," ").toLowerCase().indexOf(t.searchQuery)})),this.page=1,this.placeIcons()}},{key:"placeIcons",value:function(){var t,o=this,n=this.limit*this.page,i=n-this.limit,r=0;this.$icons.off().empty(),s.exoIcon.field&&s.exoIcon.field.emptyIcon&&this.$icons.append('<a class="exo-icon-browser-icon empty '+(this.selected?"":" selected")+'">'+s.exoIcon.field.emptyIcon+"</a>"),this.icons.forEach(function(e){i<=r&&r<n&&(t="exo-icon-browser-icon",e.match(/data-icon-id="(.*?)"/)[1]===o.selected&&(t+=" selected"),o.$icons.append('<a class="'+t+'">'+e+"</a>")),r++}),this.$icons.find(".exo-icon-browser-icon").once("exo.icon").on("click",function(e){o.selected=c(e.currentTarget).find(".exo-icon").data("icon-id")||"",o.event("select").trigger(o),o.callCallback("onSelect")}),this.togglePager(),this.buildInfo()}},{key:"buildInfo",value:function(){this.$infoPages.html(this.page+"/"+(Math.floor(this.icons.length/this.limit)+1)),this.$infoTotal.html("("+this.icons.length.toString()+")")}},{key:"getIconsByPackageId",value:function(e){return s.exoIcon.package&&s.exoIcon.package[e]?s.exoIcon.package[e]:null}},{key:"callCallback",value:function(e){var t,e=this.get(e);e&&("string"==typeof e?(t=n.Exo.stringToCallback(e))&&t.object[t.function](this):"function"!=typeof e&&"object"!==_typeof(e)||e(this))}},{key:"setSelected",value:function(e){return this.selected=e,this}},{key:"getSelected",value:function(){return this.selected}},{key:"getSelectedIcon",value:function(){var t=this;return this.icons.find(function(e){return e.match(/data-icon-id="(.*?)"/)[1]===t.selected})||""}}]),i}();n.behaviors.exoIconBrowser={instance:null,attach:function(e){var n=this;if(s.exoIcon&&s.exoIcon.browser)for(var t in s.exoIcon.browser)!function(t){var e,o;s.exoIcon.browser.hasOwnProperty(t)&&(e=c("#exo-icon-browser-"+t).once("exo.icon")).length&&(o=s.exoIcon.browser[t],n.instance=new i(t,e),n.instance.build(o).then(function(e){e&&(n.instance.afterBuild(),delete s.exoIcon.browser[t])}))}(t)}}}(jQuery,Drupal,drupalSettings);