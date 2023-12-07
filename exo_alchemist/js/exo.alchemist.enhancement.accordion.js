"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0===i)return("string"===t?String:Number)(e);i=i.call(e,t||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}!function(a,h){var o=function(){function n(e,t){var i,r=this,e=(_classCallCheck(this,n),this.id="",this.idSelector="",this.speed=5e3,this.history=!1,this.require=!1,this.$wrapper=t,this.id=e,this.idSelector='data-ee--accordion-id="'+this.id+'"',this.$items=t.find(".ee--accordion-item["+this.idSelector+"]"),this.$triggers=t.find(".ee--accordion-trigger["+this.idSelector+"]"),this.$contents=t.find(".ee--accordion-content["+this.idSelector+"]"),this.history=void 0!==t.data("ee--accordion-history"),this.require=void 0!==t.data("ee--accordion-require"),this.style=t.data("ee--accordion-style")||"vertical",void 0!==t.data("ee--accordion-collapse")),o=("none"!==this.style&&this.$contents.hide(),this.$triggers.first()),t=!1;this.$items.each(function(e,t){var i,o,t=a(t),n=t.find(".ee--accordion-trigger"),t=t.find(".ee--accordion-content");n.data("ee--accordion-item-id")||(i=r.id+"-trigger-"+e,o=r.id+"-content-"+e,n.attr("id",i).attr("data-ee--accordion-item-id",e).attr("aria-controls",o),t.attr("id",o).attr("aria-labelledby",i))}),h.Exo.$window.on("popstate.exo.alchemist.enhancement.tabs."+this.id,function(e){var t=h.ExoAlchemistEnhancement.getHashForKey("ee--accordion");t&&void 0!==t[r.id]?(t=r.$triggers.filter('[data-ee--accordion-item-id="'+t[r.id]+'"]')).length&&r.show(t.first(),!0,!0,!1):r.show(r.$triggers.first(),!0,!0,!1)}),this.isLayoutBuilder()?(h.ExoAlchemistAdmin.lockNestedFields(this.$items),h.Exo.$document.on("exoComponentFieldEditActive.exo.alchemist.enhancement.accordion."+this.id,function(e,t){t=a(t);t.hasClass("ee--accordion-item")&&r.$wrapper.find(t).length&&(r.show(t,!1,!1,r.history),h.ExoAlchemistAdmin.sizeFieldOverlay(t),h.ExoAlchemistAdmin.sizeTarget(t))})):(i=h.ExoAlchemistEnhancement.getHashForKey("ee--accordion"))&&void 0!==i[r.id]&&(i=r.$triggers.filter('[data-ee--accordion-item-id="'+i[r.id]+'"]')).length&&(o=i.first(),t=!0),this.$triggers.on("click.exo.alchemist.enhancement.accordion",function(e){e.preventDefault(),r.show(a(e.currentTarget),!0,r.keepOpen(),r.history)}).on("keydown.exo.alchemist.enhancement.accordion",function(e){var t;switch(e.which){case 13:case 32:e.preventDefault(),e.stopPropagation(),r.show(a(e.currentTarget),!0,r.keepOpen(),r.history);break;case 40:e.preventDefault(),e.stopPropagation(),(t=a(e.currentTarget).closest(".ee--accordion-item["+r.idSelector+"]").next().find(".ee--accordion-trigger["+r.idSelector+"]")).length&&(r.show(t,!0,r.keepOpen(),r.history),t.focus());break;case 38:e.preventDefault(),e.stopPropagation(),(t=a(e.currentTarget).closest(".ee--accordion-item["+r.idSelector+"]").prev().find(".ee--accordion-trigger["+r.idSelector+"]")).length&&(r.show(t,!0,r.keepOpen(),r.history),t.focus())}}),!1!=e&&!t||(h.Exo.$window.on("ee--tab.open",function(e,t){t.content.find(r.$wrapper).length&&r.show(o,!0,!0,!1)}),this.show(o,!0,!0,!1))}return _createClass(n,[{key:"keepOpen",value:function(){return this.require||this.isLayoutBuilder()}},{key:"show",value:function(e,t,i,o){var n=this,r=(t=void 0===t||t,i=void 0!==i&&i,o=void 0===o||o,e.closest(".ee--accordion-item["+this.idSelector+"]")),a=r.find(".ee--accordion-content["+this.idSelector+"]"),c=e.data("ee--accordion-item-id");if(a.length){var s=r.hasClass("show"),d=this.$items.filter(".show"),l=d.find(".ee--accordion-content["+this.idSelector+"]");if(this.isLayoutBuilder()){if(s)return;h.ExoAlchemistAdmin.lockNestedFields(d)}(!s||i)&&s||(d.removeClass("show"),e.attr("aria-expanded","false"),o&&void 0!==c&&h.ExoAlchemistEnhancement.removeHashForKey("ee--accordion",c,this.id),t&&"none"!==this.style?"horizontal"===this.style?setTimeout(function(){l.animate({width:"toggle",opacity:"toggle"},350)}):l.slideToggle(350,"swing"):d.removeClass("shown")),s&&!i||!o||void 0===c||h.ExoAlchemistEnhancement.setHashForKey("ee--accordion",c,this.id),s||(r.addClass("show"),this.$wrapper.attr("data-ee--accordion-show",c),e.attr("aria-expanded","true"),t&&"none"!==this.style?(d=function(){h.Exo.checkElementPosition(),n.isLayoutBuilder()&&h.ExoAlchemistAdmin.unlockNestedFields(r)},"horizontal"===this.style?a.animate({width:"toggle",opacity:"toggle"},350,"swing",d):a.slideToggle(350,"swing",d)):(setTimeout(function(){r.addClass("shown")},10),h.Exo.checkElementPosition(),this.isLayoutBuilder()&&h.ExoAlchemistAdmin.unlockNestedFields(r)))}}},{key:"unload",value:function(){h.Exo.$document.off("exoComponentFieldEditActive.exo.alchemist.enhancement.accordion."+this.id),h.Exo.$window.off("popstate.exo.alchemist.enhancement.accordion."+this.id),h.Exo.$window.off("ee--tab.open."+this.id)}},{key:"isLayoutBuilder",value:function(){return h.ExoAlchemistAdmin&&h.ExoAlchemistAdmin.isLayoutBuilder()}}]),n}();h.behaviors.exoAlchemistEnhancementAccordion={count:0,instances:{},attach:function(e){var i=this;a(".ee--accordion-wrapper",e).once("exo.alchemist.enhancement").each(function(){var e=a(this),t=e.data("ee--accordion-id");e.data("ee--accordion-count",i.count),i.instances[t+i.count]=new o(t,e),i.count++})},detach:function(e,t,i){var o;"unload"===i&&(o=this,a(".ee--accordion-wrapper",e).each(function(){var e=a(this),e=e.data("ee--accordion-id")+e.data("ee--accordion-count");void 0!==o.instances[e]&&(o.instances[e].unload(),delete o.instances[e])}))}}}(jQuery,Drupal,drupalSettings);