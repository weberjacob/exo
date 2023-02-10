"use strict";function _typeof(A){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A})(A)}function _classCallCheck(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(A,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(A,_toPropertyKey(o.key),o)}}function _createClass(A,e,t){return e&&_defineProperties(A.prototype,e),t&&_defineProperties(A,t),Object.defineProperty(A,"prototype",{writable:!1}),A}function _toPropertyKey(A){A=_toPrimitive(A,"string");return"symbol"===_typeof(A)?A:String(A)}function _toPrimitive(A,e){if("object"!==_typeof(A)||null===A)return A;var t=A[Symbol.toPrimitive];if(void 0===t)return("string"===e?String:Number)(A);t=t.call(A,e||"default");if("object"!==_typeof(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(A,e,t){var o=_superPropBase(A,e);if(o)return(o=Object.getOwnPropertyDescriptor(o,e)).get?o.get.call(arguments.length<3?A:t):o.value}).apply(this,arguments)}function _superPropBase(A,e){for(;!Object.prototype.hasOwnProperty.call(A,e)&&null!==(A=_getPrototypeOf(A)););return A}function _inherits(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),Object.defineProperty(A,"prototype",{writable:!1}),e&&_setPrototypeOf(A,e)}function _setPrototypeOf(A,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(A,e){return A.__proto__=e,A})(A,e)}function _createSuper(t){var o=_isNativeReflectConstruct();return function(){var A,e=_getPrototypeOf(t);return _possibleConstructorReturn(this,o?(A=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,A)):e.apply(this,arguments))}}function _possibleConstructorReturn(A,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(A)}function _assertThisInitialized(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(A){return!1}}function _getPrototypeOf(A){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(A){return A.__proto__||Object.getPrototypeOf(A)})(A)}var ExoVideoBase=function(){_inherits(i,ExoData);var t=_createSuper(i);function i(A,e){return _classCallCheck(this,i),(A=t.call(this,A)).ready=!1,A.expanded=!1,A.$wrapper=e,A}return _createClass(i,[{key:"build",value:function(t){var o=this;return new Promise(function(e,A){_get(_getPrototypeOf(i.prototype),"build",o).call(o,t).then(function(A){null!==A&&(o.setInnerWrapper(),o.make()),e(A)},A)})}},{key:"make",value:function(){this.$video=jQuery('<div id="'+this.getId()+'-video" class="exo-video-bg" style="transform: translate(-100vw, 0);"></div>').appendTo(this.$videoWrapper).css({position:"cover"===this.get("sizing")?"absolute":"relative"}),this.get("expanded")||this.$video.css({pointerEvents:"none"}),this.get("controls")&&this.makeControls()}},{key:"makeControls",value:function(){var A,t=this;void 0===this.$control&&(this.$control=jQuery('<div id="'+this.getId()+'-controls" class="exo-video-bg-control" style="display:none"></div>'),A=jQuery('<div class="exo-video-bg-toggle" tabindex="0"></div>').on("click",function(A){A=jQuery(A.target);t.toggle(A)}).on("keydown",function(A){switch(A.which){case 13:case 32:A.preventDefault(),A.stopPropagation();var e=jQuery(A.target);t.toggle(e)}}).appendTo(this.$control),this.get("autoplay")?A.text("Pause").addClass("exo-video-bg-pause"):A.text("Play").addClass("exo-video-bg-play"),this.$control.appendTo(this.$wrapper))}},{key:"toggle",value:function(A){A.hasClass("exo-video-bg-play")?(this.videoPlay(),A.text("Pause").removeClass("exo-video-bg-play").addClass("exo-video-bg-pause")):(this.videoPause(),A.text("Play").removeClass("exo-video-bg-pause").addClass("exo-video-bg-play"))}},{key:"setInnerWrapper",value:function(){var e,t=this;this.$videoWrapper=jQuery('<div class="exo-video-bg-wrapper"></div>').appendTo(this.$wrapper).css({zIndex:this.get("zIndex"),position:"cover"===this.get("sizing")?this.get("position"):"relative",width:"100%"}),"cover"===this.get("sizing")?this.$videoWrapper.css({top:0,left:0,right:0,bottom:0,overflow:"hidden"}):this.$videoWrapper.css({display:"flex",alignItems:"center",justifyContent:"center"}),this.makeImageBackground(),this.get("expand")&&(e=jQuery('<a class="exo-video-bg-expand-open"><span>Open</span></a>').on("click.exo.video",function(A){Drupal.Exo.isMobile()?(e.hide(),t.videoRewind(),t.videoUnMute(),setTimeout(function(){t.$wrapper.on("click.exo.video",function(A){t.$wrapper.off("click.exo.video"),t.videoMute(),e.show()})})):t.videoExpand()}).appendTo(this.$videoWrapper)),Drupal.Exo.trackElementPosition(this.$wrapper,function(A){setTimeout(function(){t.videoResize()})})}},{key:"makeImageBackground",value:function(){var A;this.get("image")&&(A={backgroundImage:"url("+this.get("image")+")",backgroundSize:this.get("sizing"),backgroundPosition:"center center",backgroundRepeat:"no-repeat"},this.$videoWrapper.css(A))}},{key:"getWrapper",value:function(){return this.$wrapper}},{key:"videoReady",value:function(){Drupal.ExoVideo.onReady(this),this.ready=!0,this.$video=jQuery("#"+this.getId()+"-video"),this.get("mute")?this.videoMute():this.videoUnMute(),this.videoResizeBind()}},{key:"videoResizeBind",value:function(){var e=this;!1!==this.get("videoRatio")&&(Drupal.Exo.$window.on("resize.video-bg",{},Drupal.debounce(function(A){e.videoResize()},100)),this.videoResize())}},{key:"videoResize",value:function(){this.$video.css({width:""});var A=this.$videoWrapper.innerWidth(),e=this.$videoWrapper.innerHeight(),t={},o=A,i=e=0===e?A/this.get("videoRatio"):e;"cover"===this.get("sizing")?(i=A/this.get("videoRatio"))<e&&(o=(i=e)*this.get("videoRatio")):(t.position="relative",i=A/this.get("videoRatio")),i=Math.ceil(i),o=Math.ceil(o),"cover"===this.get("sizing")&&(e=Math.round(e/2-i/2),A=Math.round(A/2-o/2),t.top=e+"px",t.left=A+"px"),t.width=o+"px",t.height=i+"px",this.$video.css(t)}},{key:"videoWatch",value:function(){switch(this.get("autoplay")||this.videoPause(),this.get("expanded")&&this.videoContractBind(),this.get("when")){case"hover":this.videoPause(),this.videoHoverBind();break;case"viewport":this.videoViewportBind()}this.get("controls")&&this.$control.fadeIn()}},{key:"videoExpand",value:function(){var A=this.$wrapper.attr("id")+"-expand",e=(this.$expand=this.$wrapper.clone(),this.$expand.html(""),this.$expand.attr("id",A),this.$expand.addClass("exo-video-bg-expand"),jQuery('<a class="exo-video-bg-expand-close"><span>Close</span></a>').appendTo(this.$expand),this.$expand.appendTo(Drupal.Exo.$exoCanvas).css({position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:9999}),jQuery.extend(!0,{},this.getData(),{mute:!1,loop:!1,when:"always",expand:!1,expanded:!0,sizing:"contain"}));Drupal.ExoVideo.create(A,e),Drupal.Exo.lockOverflow(this.$expand)}},{key:"videoContractBind",value:function(){var e=this;this.$videoWrapper.add(".exo-video-bg-expand-close",this.$wrapper[0]).on("click.exo.video",function(A){A.preventDefault(),Drupal.Exo.unlockOverflow(e.$wrapper),e.$wrapper.remove(),Drupal.ExoVideo.removeInstance(e.$wrapper.attr("id"))})}},{key:"videoHoverBind",value:function(){var e=this;this.$videoWrapper.on("mouseenter.exo.video",function(A){e.videoPlay()}).on("mouseleave.exo.video",function(A){e.videoPause()})}},{key:"videoViewportBind",value:function(){var A=this,e=setTimeout(function(){A.videoPause()},10);Drupal.Exo.trackElementPosition(this.$videoWrapper,function(){clearTimeout(e),A.videoPlay()},function(){clearTimeout(e),A.videoPause()})}},{key:"videoTime",value:function(){}},{key:"videoPlay",value:function(){}},{key:"videoPause",value:function(){}},{key:"videoRewind",value:function(){}},{key:"videoMute",value:function(){}},{key:"videoUnMute",value:function(){}}]),i}();!function(o,n){n.ExoVideoProviders={};var A=function(){_inherits(i,ExoVideoBase);var e=_createSuper(i);function i(){var A;return _classCallCheck(this,i),(A=e.apply(this,arguments)).started=!1,A}return _createClass(i,[{key:"make",value:function(){var A=this;_get(_getPrototypeOf(i.prototype),"make",this).call(this),i.getApi().then(function(){A.videoBuild()})}},{key:"videoBuild",value:function(){var A,e=this;void 0===this.player&&(A={loop:0,start:this.get("start"),autoplay:0,controls:0,disablekb:1,showinfo:0,playsinline:1,wmode:"transparent",iv_load_policy:3,modestbranding:1,rel:0,fs:0},this.player=new YT.Player(this.getId()+"-video",{height:"100%",width:"100%",playerVars:A,videoId:this.get("videoId"),events:{onReady:function(A){e.videoReady()},onStateChange:function(A){1===A.data&&!1===e.started&&(e.started=!0,e.$video.css("transform","").hide().fadeIn(),e.videoStartTimer()),0===A.data&&e.get("loop")&&(e.videoRewind(),e.videoMute(),e.videoPlay())}}}))}},{key:"videoReady",value:function(){_get(_getPrototypeOf(i.prototype),"videoReady",this).call(this),this.videoPlay(),this.videoWatch()}},{key:"videoStartTimer",value:function(){var A=this;n.ExoVideo.onTimeUpdate(this),!this.get("loop")&&this.videoTime().toFixed(2)>this.player.getDuration().toFixed(2)-.4?(this.$video.css("transform","").fadeOut(400),this.$videoWrapper.addClass("loop-stop")):setTimeout(function(){A.videoStartTimer()},100)}},{key:"videoTime",value:function(){return this.player.getCurrentTime()}},{key:"videoPlay",value:function(){return this.player.playVideo()}},{key:"videoPause",value:function(){return this.player.pauseVideo()}},{key:"videoRewind",value:function(){return this.player.seekTo(0)}},{key:"videoMute",value:function(){return this.player.mute()}},{key:"videoUnMute",value:function(){return this.player.unMute()}}],[{key:"getApi",value:function(){return new Promise(function(A,e){var t,o;0===i.apiState?(i.apiState=1,(t=document.createElement("script")).src="https://www.youtube.com/iframe_api",(o=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,o),window.onYouTubeIframeAPIReady=function(){i.apiState=2,A(),n.Exo.$document.trigger("exo-video-youtube-ready")}):1===i.apiState?n.Exo.$document.one("exo-video-youtube-ready",function(){A()}):A()})}}]),i}(),A=(A.apiState=0,n.ExoVideoProviders.youtube=A,function(){_inherits(i,ExoVideoBase);var e=_createSuper(i);function i(){var A;return _classCallCheck(this,i),(A=e.apply(this,arguments)).started=!1,A.time=0,A}return _createClass(i,[{key:"make",value:function(){var A=this;_get(_getPrototypeOf(i.prototype),"make",this).call(this),i.getApi().then(function(){A.videoBuild()})}},{key:"videoBuild",value:function(){var A,e=this;void 0===this.player&&(A={id:this.get("videoId"),autoplay:!0,background:!1===this.get("expanded"),controls:!1===this.get("expanded"),loop:this.get("loop"),byline:!1,portrait:!1},this.player=new Vimeo.Player(this.getId()+"-video",A),this.player.ready().then(function(){e.videoReady()}))}},{key:"videoReady",value:function(){_get(_getPrototypeOf(i.prototype),"videoReady",this).call(this),this.$video.find("iframe").css({width:"100%",height:"100%"}).removeAttr("width").removeAttr("height"),this.videoResize(),this.videoPrepare()}},{key:"videoPrepare",value:function(){var e=this;this.get("expanded")&&(this.$video.hide().css("transform","").fadeIn(),this.videoWatch()),this.player.on("timeupdate",function(A){e.time=A.seconds,2.3<e.time&&(e.player.off("timeupdate"),e.$video.hide().css("transform","").fadeIn(),e.videoWatch())})}},{key:"videoTime",value:function(){return this.time}},{key:"videoPlay",value:function(){return this.player.play()}},{key:"videoPause",value:function(){return this.player.pause()}},{key:"videoRewind",value:function(){return this.player.setCurrentTime(0)}},{key:"videoMute",value:function(){return this.player.setVolume(0)}},{key:"videoUnMute",value:function(){return this.player.setVolume(1)}}],[{key:"getApi",value:function(){return new Promise(function(A,e){var t,o;0===i.apiState?(i.apiState=1,(t=document.createElement("script")).src="https://player.vimeo.com/api/player.js",t.onload=function(){i.apiState=2,A(),n.Exo.$document.trigger("exo-video-vimeo-ready")},(o=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,o)):1===i.apiState?n.Exo.$document.one("exo-video-vimeo-ready",function(){A()}):A()})}}]),i}()),A=(A.apiState=0,n.ExoVideoProviders.vimeo=A,function(){_inherits(t,ExoDataManager);var e=_createSuper(t);function t(){var A;return _classCallCheck(this,t),(A=e.apply(this,arguments)).label="ExoVideo",A.settingsGroup="exoVideo",A.instanceSettingsGroup="videos",A.autoplaySupported=null,A.events={ready:new ExoEvent,timeupdate:new ExoEvent},A}return _createClass(t,[{key:"createInstance",value:function(A,e){if(void 0!==n.ExoVideoProviders[e.provider]){var t=o("#"+A);if(t.length)return new n.ExoVideoProviders[e.provider](A,t)}return!1}},{key:"videoResize",value:function(){this.getInstances().each(function(A){A.videoResize()})}},{key:"onReady",value:function(A){this.event("ready").trigger(A)}},{key:"onTimeUpdate",value:function(A){this.event("timeupdate").trigger(A)}},{key:"event",value:function(A){return void 0!==this.events[A]?this.events[A].expose():null}},{key:"detectAutoplay",value:function(r){var a=this;return this.autoplayPromise||(this.autoplayPromise=new Promise(function(A,e){if(null!==a.autoplaySupported)return a.autoplaySupported;var t=document.createElement("video"),o=document.createElement("source"),i=(o.src="data:video/mp4;base64,AAAAFGZ0eXBNU05WAAACAE1TTlYAAAOUbW9vdgAAAGxtdmhkAAAAAM9ghv7PYIb+AAACWAAACu8AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAnh0cmFrAAAAXHRraGQAAAAHz2CG/s9ghv4AAAABAAAAAAAACu8AAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAFAAAAA4AAAAAAHgbWRpYQAAACBtZGhkAAAAAM9ghv7PYIb+AAALuAAANq8AAAAAAAAAIWhkbHIAAAAAbWhscnZpZGVBVlMgAAAAAAABAB4AAAABl21pbmYAAAAUdm1oZAAAAAAAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAVdzdGJsAAAAp3N0c2QAAAAAAAAAAQAAAJdhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAFAAOABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAAEmNvbHJuY2xjAAEAAQABAAAAL2F2Y0MBTUAz/+EAGGdNQDOadCk/LgIgAAADACAAAAMA0eMGVAEABGjuPIAAAAAYc3R0cwAAAAAAAAABAAAADgAAA+gAAAAUc3RzcwAAAAAAAAABAAAAAQAAABxzdHNjAAAAAAAAAAEAAAABAAAADgAAAAEAAABMc3RzegAAAAAAAAAAAAAADgAAAE8AAAAOAAAADQAAAA0AAAANAAAADQAAAA0AAAANAAAADQAAAA0AAAANAAAADQAAAA4AAAAOAAAAFHN0Y28AAAAAAAAAAQAAA7AAAAA0dXVpZFVTTVQh0k/Ou4hpXPrJx0AAAAAcTVREVAABABIAAAAKVcQAAAAAAAEAAAAAAAAAqHV1aWRVU01UIdJPzruIaVz6ycdAAAAAkE1URFQABAAMAAAAC1XEAAACHAAeAAAABBXHAAEAQQBWAFMAIABNAGUAZABpAGEAAAAqAAAAASoOAAEAZABlAHQAZQBjAHQAXwBhAHUAdABvAHAAbABhAHkAAAAyAAAAA1XEAAEAMgAwADAANQBtAGUALwAwADcALwAwADYAMAA2ACAAMwA6ADUAOgAwAAABA21kYXQAAAAYZ01AM5p0KT8uAiAAAAMAIAAAAwDR4wZUAAAABGjuPIAAAAAnZYiAIAAR//eBLT+oL1eA2Nlb/edvwWZflzEVLlhlXtJvSAEGRA3ZAAAACkGaAQCyJ/8AFBAAAAAJQZoCATP/AOmBAAAACUGaAwGz/wDpgAAAAAlBmgQCM/8A6YEAAAAJQZoFArP/AOmBAAAACUGaBgMz/wDpgQAAAAlBmgcDs/8A6YEAAAAJQZoIBDP/AOmAAAAACUGaCQSz/wDpgAAAAAlBmgoFM/8A6YEAAAAJQZoLBbP/AOmAAAAACkGaDAYyJ/8AFBAAAAAKQZoNBrIv/4cMeQ==",document.createElement("source")),n=(i.src="data:video/webm;base64,GkXfo49CgoR3ZWJtQoeBAUKFgQEYU4BnAQAAAAAAF60RTZt0vE27jFOrhBVJqWZTrIIQA027jFOrhBZUrmtTrIIQbE27jFOrhBFNm3RTrIIXmU27jFOrhBxTu2tTrIIWs+xPvwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFUmpZuQq17GDD0JATYCjbGliZWJtbCB2MC43LjcgKyBsaWJtYXRyb3NrYSB2MC44LjFXQY9BVlNNYXRyb3NrYUZpbGVEiYRFnEAARGGIBc2Lz1QNtgBzpJCy3XZ0KNuKNZS4+fDpFxzUFlSua9iu1teBAXPFhL4G+bmDgQG5gQGIgQFVqoEAnIEAbeeBASMxT4Q/gAAAVe6BAIaFVl9WUDiqgQEj44OEE95DVSK1nIN1bmTgkbCBULqBPJqBAFSwgVBUuoE87EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9DtnVB4eeBAKC4obaBAAAAkAMAnQEqUAA8AABHCIWFiIWEiAICAAamYnoOC6cfJa8f5Zvda4D+/7YOf//nNefQYACgnKGWgQFNANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgQKbANEBAAEQEAAYABhYL/QACIhgAPuC/rKgnKGWgQPoANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgQU1ANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgQaDANEBAAEQEAAYABhYL/QACIhgAPuC/rKgnKGWgQfQANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgQkdANEBAAEQEBRgAGFgv9AAIiGAAPuC/rOgnKGWgQprANEBAAEQEAAYABhYL/QACIhgAPuC/rKgnKGWgQu4ANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgQ0FANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgQ5TANEBAAEQEAAYABhYL/QACIhgAPuC/rKgnKGWgQ+gANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgRDtANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgRI7ANEBAAEQEAAYABhYL/QACIhgAPuC/rIcU7trQOC7jLOBALeH94EB8YIUzLuNs4IBTbeH94EB8YIUzLuNs4ICm7eH94EB8YIUzLuNs4ID6LeH94EB8YIUzLuNs4IFNbeH94EB8YIUzLuNs4IGg7eH94EB8YIUzLuNs4IH0LeH94EB8YIUzLuNs4IJHbeH94EB8YIUzLuNs4IKa7eH94EB8YIUzLuNs4ILuLeH94EB8YIUzLuNs4INBbeH94EB8YIUzLuNs4IOU7eH94EB8YIUzLuNs4IPoLeH94EB8YIUzLuNs4IQ7beH94EB8YIUzLuNs4ISO7eH94EB8YIUzBFNm3SPTbuMU6uEH0O2dVOsghTM",t.appendChild(i),t.appendChild(o),t.id="base64_test_video",t.autoplay=!0,t.style.position="fixed",t.style.left="5000px",document.getElementsByTagName("body")[0].appendChild(t),document.getElementById("base64_test_video"));setTimeout(function(){a.autoplaySupported=!n.paused,A(a.autoplaySupported),document.getElementsByTagName("body")[0].removeChild(t)},r)})),this.autoplayPromise}}]),t}());n.ExoVideo=new A,n.behaviors.exoVideo={attach:function(A){n.ExoVideo.attach(A)}}}(jQuery,Drupal,Drupal.debounce);