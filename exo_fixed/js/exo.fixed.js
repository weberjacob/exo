"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var i=_superPropBase(t,e);if(i)return i=Object.getOwnPropertyDescriptor(i,e),i.get?i.get.call(arguments.length<3?t:o):i.value}).apply(this,arguments)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(o){var i=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(o);return _possibleConstructorReturn(this,i?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function(s,i,r,l,e){var f=function(){_inherits(n,ExoData);var o=_createSuper(n);function n(t,e){return _classCallCheck(this,n),(t=o.call(this,t)).floatStart=0,t.floatEnd=0,t.themeStart=0,t.themeEnd=0,t.fixed=!1,t.themed=!1,t.lastScrollTop=0,t.isLocked=!1,t.$wrapper=e,t}return _createClass(n,[{key:"build",value:function(o){var i=this;return new Promise(function(e,t){_get(_getPrototypeOf(n.prototype),"build",i).call(i,o).then(function(t){null!==t&&(i.type=i.get("type"),"sticky"!==i.type&&(i.type=r.Exo.isMobile()?"scroll":i.type),i.lastDirection="scroll"===i.type?"up":"down",i.$element=i.$wrapper.find(".exo-fixed-element"),i.bind(),i.$wrapper.addClass("exo-fixed-no-animations"),i.resize(),i.onScroll(),setTimeout(function(){i.$wrapper.removeClass("exo-fixed-no-animations")},10)),e(t)},t)})}},{key:"bind",value:function(){var t=this,e=i.throttle(function(){t.onScroll()},10);r.Exo.$window.on("scroll.exo.fixed",function(t){e()}),r.Exo.addOnResize("exo.fixed."+this.getId(),function(){t.windowWidth!==r.Exo.$window.width()&&(t.$wrapper.addClass("exo-fixed-no-animations"),t.resize(),t.onScroll(),setTimeout(function(){t.$wrapper.removeClass("exo-fixed-no-animations")},10),t.windowWidth=r.Exo.$window.width())})}},{key:"resize",value:function(){this.reset(),this.calcSize(),this.setSize()}},{key:"reset",value:function(){this.fixed=!1,this.themed=!1,this.$wrapper.removeAttr("style"),this.$element.removeAttr("style"),"sticky"===this.type&&this.$element.parent().removeAttr("style"),this.$element.removeClass("exo-fixed-float exo-fixed-hide exo-fixed-theme")}},{key:"calcSize",value:function(){this.offset=this.$element.offset(),this.offset.right=r.Exo.$window.width()-(this.offset.left+this.$element.outerWidth()),this.floatOffset=0,this.width=Math.min(this.$element.outerWidth(),r.Exo.$window.width()),this.height=("sticky"===this.type?this.$element.parent():this.$element).outerHeight(),this.floatStart=Math.round(this.offset.top-this.floatOffset-e.offsets.top),this.floatStart=0<=this.floatStart?this.floatStart:0,this.floatEnd=this.floatStart<=0?1:this.floatStart,this.themeStart=Math.round(this.floatStart+this.height),this.themeEnd=Math.round(this.floatEnd+1),"scroll"===this.type&&(this.floatStart=Math.round(this.floatEnd+this.height),this.themeStart=this.floatStart,this.themeEnd=Math.round(this.floatStart+1))}},{key:"setSize",value:function(){this.$wrapper.css({width:this.width,height:this.height})}},{key:"onScroll",value:function(){var o,i=this,t=Math.max(r.Exo.$window.scrollTop(),0),e=t>this.lastScrollTop?"down":"up";50<Math.abs(this.lastScrollTop-t)&&(this.lastDirection=e,this.lastScrollTop=t),this.isLocked||(o=this.floatOffset,s(".exo-fixed").each(function(t,e){e!==i.$wrapper.get(0)&&!s(e).find(".exo-fixed-hide").length&&s(e).offset().top<i.offset.top&&(o+=s(e).height())}),!1===this.themed&&"down"==e&&t>=this.themeStart?(this.themed=!0,this.$element.addClass("exo-fixed-theme")):!0===this.themed&&"up"==e&&t<=this.themeEnd&&(this.themed=!1,this.$element.removeClass("exo-fixed-theme")),"scroll"===this.type&&("down"===this.lastDirection?this.$element.addClass("exo-fixed-hide"):this.$element.removeClass("exo-fixed-no-animations exo-fixed-hide")),"down"===this.lastDirection&&t>this.floatStart-o?!1===this.fixed&&this.doFloat(o):"up"===this.lastDirection&&!0===this.fixed&&t<=this.floatEnd-o&&this.unFloat())}},{key:"resetScroll",value:function(){this.lastScrollTop=r.Exo.$window.scrollTop(),this.lastDirection="down"}},{key:"doFloat",value:function(t){this.fixed=!0,"scroll"===this.type&&this.$element.addClass("exo-fixed-no-animations exo-fixed-hide"),"sticky"===this.type?this.$element.css({position:"sticky",top:t+e.offsets.top}):this.$element.css({position:"fixed",marginLeft:this.offset.left-e.offsets.left,marginRight:this.offset.right-e.offsets.right,maxWidth:this.width,top:t+e.offsets.top,left:e.offsets.left,right:e.offsets.right}),this.$element.addClass("exo-fixed-float")}},{key:"unFloat",value:function(){this.reset(),this.setSize(),this.$element.removeClass("exo-fixed-float")}},{key:"lock",value:function(){this.isLocked=!0}},{key:"unlock",value:function(){this.resetScroll(),this.isLocked=!1}}]),n}();r.behaviors.exoFixed={ready:!1,instances:[],attach:function(t){var e=this;void 0!==l.exoFixed&&void 0!==l.exoFixed.elements&&(!1===this.ready?r.Exo.event("ready").on("exo.fixed",function(){e.ready=!0,e.build(),s(document).on("drupalViewportOffsetChange.exo.fixed",function(t){e.resize(),s(document).off("drupalViewportOffsetChange.exo.fixed")})}):this.build())},build:function(){var t,e,o,i=this,n=[];for(t in l.exoFixed.elements)l.exoFixed.elements.hasOwnProperty(t)&&(e=l.exoFixed.elements[t]).hasOwnProperty("selector")&&(o=s(e.selector).first().once("exo.fixed")).length&&n.push({id:t,$element:o,settings:e,top:o.offset().top});n.length&&(n.sort(function(t,e){t=t.top,e=e.top;return t<e?-1:e<t?1:0}),n.forEach(function(e){e.$element.imagesLoaded(function(){var t=new f(e.id,e.$element);i.instances.push(t),t.build(e.settings)})}))},lock:function(){for(var t=0;t<this.instances.length;t++)this.instances[t].lock()},unlock:function(){for(var t=0;t<this.instances.length;t++)this.instances[t].unlock()},resize:function(){for(var t=0;t<this.instances.length;t++){var e=this.instances[t];e.resize(),e.onScroll()}}}}(jQuery,_,Drupal,drupalSettings,Drupal.displace);