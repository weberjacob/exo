"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0===i)return("string"===t?String:Number)(e);i=i.call(e,t||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}!function(p,h,f){var n=function(){function u(e,t){var i=this,n=(_classCallCheck(this,u),this.id="",this.$wrapper=t,this.id=e,t.find(".swiper-pagination")),o=t.find(".swiper-button-next"),r=t.find(".swiper-button-prev"),a=t.find(".swiper-scrollbar"),s=t.find(".swiper-autoplay-time"),l=t.find(".swiper-autoplay-bar"),c=this.isLayoutBuilder(),d={pagination:{},navigation:{},scrollbar:{},thumbs:{},on:{init:function(){p(document).trigger("exoComponentSliderInit")}}},n=(n.length&&(d.pagination.el=n.get(0)),o.length&&(d.navigation.nextEl=o.get(0)),r.length&&(d.navigation.prevEl=r.get(0)),a.length&&(d.scrollbar.el=a.get(0)),(s.length||l.length)&&(d.autoplay={},d.autoplay.delay=4e3,d.autoplay.disableOnInteraction=!1,d.on.autoplayStop=function(e){s.hide(),l.parent().hide()},d.on.autoplayTimeLeft=function(e,t,i){s.length&&(s[0].style.setProperty("--progress",String(1-i)),s[0].textContent="".concat(Math.ceil(t/1e3),"s")),l.length&&(t=Math.min(100,Math.max(0,100-Math.round(100*i))),l.css("width",t+"%"))}),p.extend(!0,{},d,this.$wrapper.data("ee--slider-settings")||{})),o=(c&&(n.watchSlidesProgress=!0,n.loop=!1),t.closest(".exo-component").find('.ee--slider-nav[data-ee--slider-id="'+e+'"]'));o.length&&(r=p.extend(!0,{},{spaceBetween:10,slidesPerView:o.find(".swiper-slide").length,freeMode:!0,watchSlidesProgress:!0},o.data("ee--slider-settings")||{}),a=new f(o.get(0),r),n.thumbs.swiper=a),this.swiper=new f(this.$wrapper.get(0),n),void 0!==h.behaviors.exoImagine&&this.swiper.on("slideChange",function(){h.behaviors.exoImagine.render(i.$wrapper)}),c&&this.buildForLayoutBuilder()}return _createClass(u,[{key:"buildForLayoutBuilder",value:function(){var n=this;p(document).on("exoComponentOps.exo.alchemist.enhancement.slider."+this.id,function(e,t){h.ExoAlchemistAdmin.getActiveComponent().find(n.$wrapper).length&&((t=p(t)).find(".exo-field-op-rotator-prev").off("click").on("click",function(e){e.preventDefault(),h.ExoAlchemistAdmin.setFieldInactive(),n.swiper.slidePrev()}),t.find(".exo-field-op-rotator-next").off("click").on("click",function(e){e.preventDefault(),h.ExoAlchemistAdmin.setFieldInactive(),n.swiper.slideNext()}))}),p(document).on("exoComponentFieldEditActive.exo.alchemist.enhancement.slider."+this.id,function(e,t){var i=p(t);n.$wrapper.find(i).length&&!i.hasClass("swiper-slide-active")&&"0"!==i.css("opacity")&&(n.swiper.slideTo(i.index()),h.ExoAlchemistAdmin.lockTargetPointerEvents(),h.ExoAlchemistAdmin.setFieldInactive(),n.swiper.once("slideChangeTransitionEnd",function(e){i=p(e.clickedSlide),h.ExoAlchemistAdmin.unlockTargetPointerEvents(),h.ExoAlchemistAdmin.setFieldActive(i)}))})}},{key:"unload",value:function(){p(document).off("exoComponentOps.exo.alchemist.enhancement.slider."+this.id),p(document).off("exoComponentFieldEditActive.exo.alchemist.enhancement.slider."+this.id),this.swiper.destroy()}},{key:"isLayoutBuilder",value:function(){return h.ExoAlchemistAdmin&&h.ExoAlchemistAdmin.isLayoutBuilder()}}]),u}();h.behaviors.exoAlchemistEnhancementSlider={count:0,instances:{},attach:function(e){var i=this;p(".ee--slider-wrapper",e).once("exo.alchemist.enhancement").each(function(){var e=p(this),t=e.data("ee--slider-id");e.data("ee--slider-count",i.count),i.instances[t+i.count]=new n(t,e),i.count++})},detach:function(e,t,i){var n;"unload"===i&&(n=this,p(".ee--slider-wrapper",e).each(function(){var e=p(this),e=e.data("ee--slider-id")+e.data("ee--slider-count");void 0!==n.instances[e]&&(n.instances[e].unload(),delete n.instances[e])}))}}}(jQuery,Drupal,Swiper);