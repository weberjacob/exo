"use strict";!function(l){Drupal.behaviors.rangeSlider={sliders:{},attach:function(e,t){var d=this;if(t.exo&&t.exo.exoRadiosSlider)for(var i in t.exo.exoRadiosSlider)!function(n){var s,a;t.exo.exoRadiosSlider.hasOwnProperty(n)&&(s=t.exo.exoRadiosSlider[n],a=s.options,l("#exo-radios-slider-"+n).once("exo.element").each(function(e,t){var i=l(t).find("select"),o=i.val(),t=(i.hide(),o&&void 0!==(t=Object.keys(a).find(function(e){return a[e].key==o}))&&(s.start=t),document.getElementById("exo-radios-slider-slide-"+n)),r={start:s.start,step:1,range:{min:0,max:Object.keys(a).length-1}};!0===s.tooltips&&(r.tooltips={to:function(e){return a[Object.keys(a)[Math.round(e)]].value}}),!0===s.pips&&(r.pips={mode:"steps",density:Object.keys(a).length-1,format:{to:function(e){return a[Object.keys(a)[Math.round(e)]].value}}}),d.sliders[n]=noUiSlider.create(t,r),d.sliders[n].on("change",function(e,t){e=a[Object.keys(a)[Math.round(e[t])]].key;String(e)!==String(i.val())&&i.val(e).trigger("change")})}))}(i)},detach:function(e,t,i){var r=this;if("unload"===i)for(var o in this.sliders)!function(i){var o;r.sliders.hasOwnProperty(i)&&(o=r.sliders[i],l("#exo-radios-slider-"+i,e).findOnce("exo.element").each(function(e,t){o.destroy(),delete r.sliders[i]}))}(o)}}}(jQuery);