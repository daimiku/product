$(function(){    
	$(window).scroll(function(){
        var win_h = $(document).scrollTop();
        if(win_h >= $("nav.hidden-xs").height()){
            $("nav.hidden-xs").addClass("fixed-strip");
        }
        else{
            $("nav.hidden-xs").removeClass("fixed-strip");
        }
        if(win_h >= $("header.visible-xs").height()){
            $("header.visible-xs").addClass("fixed-strip");
            $("nav.xsnav").css("position","fixed").css("top","60px");
        }
        else{
            $("header.visible-xs").removeClass("fixed-strip");
            $("nav.xsnav").css("position","absolute");
        }
    });
    
    $(".menubtn").click(function(){
        $(".xsnav").slideToggle();
    });
    
    $("a[data-toggle=collapse]").click(function(){
      if($(this).next(".collapse").hasClass("in")){
         $(this).removeClass("active");
        $(this).next(".collapse").removeClass("in").slideUp();
         }
      else{
        $(this).siblings("[data-toggle=collapse]").removeClass("active");
        $(this).addClass("active");
         $(this).siblings(".collapse").removeClass("in").slideUp(); $(this).next(".collapse").slideDown().addClass("in");
        }
      return false;
    });
    
    $(".dropdown").hover(function(){
        $(this).find("ol").stop(true,false).slideDown(500);
    },function(){
        $(this).find("ol").stop(true,false).slideUp(500);
    });
    
    $(".slidebtn").click(function(e) {
        e.preventDefault();
        $("body").toggleClass("toggled-right");
        $(".easy-sidebar-right").removeClass("toggled-right");
        $(".easy-sidebar-right").toggle();
    });
    
    $(".pic a").hover(function(){
       if($(this).children("div").children("img").size()>1){
           $(this).find("img").eq(0).toggle();
           $(this).find("img").eq(1).toggle();
       }
    });
    
    $(".pcontent li").click(function(){
        var pthis = $(this).index();
        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".pcontent").find("img").hide();
        $(this).parents(".pcontent").find("img").eq(pthis).show();
        return false;
    });
    $(".pfooter li").click(function(){
        var pthis = $(this).index();
        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".pfooter").siblings(".pcontent").find("img").hide();
        $(this).parents(".pfooter").siblings(".pcontent").find("img").eq(pthis).show();
        return false;
    });
    
    $(".pageselect li").click(function(){
        if($(this).hasClass("disabled")){
            return false;
        }
        else{
        var psize = $(".pageselect li").size();
        var pnow = $(this).siblings(".active").index();
        var pthis = $(this).index();
        $(".page").hide();
        $(this).siblings().removeClass();
        if(pthis==0){ //prev
            $(".page:nth-of-type("+(pnow-1)+")").show();
            $(".pageselect li:nth-of-type("+pnow+")").addClass("active");
            if(pnow==2)
               $(this).addClass("disabled"); 
        }
        else if(pthis==(psize-1)){
            $(".page:nth-of-type("+(pnow+1)+")").show();
            $(".pageselect li:nth-of-type("+(pnow+2)+")").addClass("active");
            if(pnow==(psize-3))
               $(this).addClass("disabled");
        }
        else
        {
            if(pthis>0 && pthis<(psize-1)){
                $(this).addClass("active");
                $(".page:nth-of-type("+pthis+")").show();
                if(pthis==1)
                    $(this).prev().addClass("disabled");
                else if(pthis==(psize-2))
                    $(this).next().addClass("disabled");
            }
        }
        return false;
        }
    });
});
