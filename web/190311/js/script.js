$(function(){
    TweenMax.to($(".chara"), 1,{"opacity" : "1", ease : Circ.easeOut});
    TweenMax.to($(".slogan1"), 1,{"opacity" : "1", ease : Circ.easeOut});
    
    $(".topbtn").click(function(){
        $("html, body").animate({scrollTop:0},500);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400){
            $(".topbtn").fadeIn("fast");
        } else {
            $(".topbtn").stop().fadeOut("fast");
        };
    });
    
    $(".slogan2").click(function(){
        $(".top").fadeIn();
        $(".page, .page>.cont").hide();
        $("footer").show();
        $(".nav li").removeClass("active");
        $(".btngroup_b").removeClass("float1").addClass("float0");
        $(".nav").removeClass("nav2").addClass("nav1");
        $("#particles-js").css({"opacity":"1","height":"100%","position":"fixed"});
    });
    $(".nav li").click(function(){
        if(!$(this).hasClass("active")){
            parentid=$(this).parent().parent();
            aid=$(this).index();
            $(".nav li").removeClass("active");
            $(this).addClass("active");
            $("html, body").animate({scrollTop:432},500);
            if(parentid.hasClass("nav1")){
                $(".top, footer").hide();
                $(".page").fadeIn();
                $(".page>.cont").eq(aid).show();
                $(".btngroup_b").removeClass("float0").addClass("float1");
                $(".nav").removeClass("nav1").addClass("nav2");
                $(".page>.cont").scrollTop(0);
                $("#particles-js").css({"opacity":"0.7","height":"432px","position":"absolute"});
            }
            else if(parentid.hasClass("nav2")){
                $(".page>.cont").hide();
                $(".page>.cont").eq(aid).fadeIn(); 
            }
        }
        else{
            return(false);
        }
    });
});