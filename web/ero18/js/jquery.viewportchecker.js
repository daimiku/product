!function(a){a.fn.viewportChecker=function(b){function c(){setTimeout(function(){e.checkElements()},d.delayTime)}var d={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window,delayTime:500};a.extend(d,b);var e=this,f={height:a(d.scrollBox).height(),width:a(d.scrollBox).width()};return this.checkElements=function(){var b,c;d.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),c=b+f.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),c=b+f.height),e.each(function(){var e=a(this),g={},h={};if(e.data("vp-add-class")&&(h.classToAdd=e.data("vp-add-class")),e.data("vp-remove-class")&&(h.classToRemove=e.data("vp-remove-class")),e.data("vp-add-class-full-view")&&(h.classToAddForFullView=e.data("vp-add-class-full-view")),e.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=e.data("vp-remove-after-animation")),e.data("vp-offset")&&(h.offset=e.data("vp-offset")),e.data("vp-repeat")&&(h.repeat=e.data("vp-repeat")),e.data("vp-scrollHorizontal")&&(h.scrollHorizontal=e.data("vp-scrollHorizontal")),e.data("vp-invertBottomOffset")&&(h.scrollHorizontal=e.data("vp-invertBottomOffset")),a.extend(g,d),a.extend(g,h),!e.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*f.height);var i=g.scrollHorizontal?e.offset().left:e.offset().top,j=g.scrollHorizontal?i+e.width():i+e.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+e.width():k+e.height();g.invertBottomOffset&&(l-=2*g.offset),k<c&&l>b?(e.removeClass(g.classToRemove),e.addClass(g.classToAdd),g.callbackFunction(e,"add"),j<=c&&i>=b?e.addClass(g.classToAddForFullView):e.removeClass(g.classToAddForFullView),e.data("vp-animated",!0),g.removeClassAfterAnimation&&e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.removeClass(g.classToAdd)})):e.hasClass(g.classToAdd)&&g.repeat&&(e.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(e,"remove"),e.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&setTimeout(function(){a(document).bind("touchmove MSPointerMove pointermove",e.checkElements)},d.delayTime),a(d.scrollBox).bind("load scroll",c),a(window).resize(function(b){f={height:a(d.scrollBox).height(),width:a(d.scrollBox).width()},setTimeout(function(){e.checkElements()},d.delayTime)}),setTimeout(function(){e.checkElements()},d.delayTime),e}}(jQuery);