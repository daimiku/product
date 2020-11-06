$(function(){
    TweenMax.to($(".chara"), 1,{"opacity" : "1"}, {ease : Circ.easeInOut});
    TweenMax.to($(".slogan"), 1,{"opacity" : "1"}, {ease : Circ.easeInOut});
    
    $(".topbtn").click(function(){
        $("html, body").animate({scrollTop:0},500);
    });
    
    $(window).scroll(function() {
        if($(".btn-b1").hasClass("active")){
            if ($(this).scrollTop() > 100){
                $(".btngroup_b").removeClass("float0-on").addClass("float0-off");
            } else {
                $(".btngroup_b").removeClass("float0-off").addClass("float0-on");
            };
        }
        if ($(this).scrollTop() > 400){
            $(".topbtn").fadeIn("fast");
        } else {
            $(".topbtn").stop().fadeOut("fast");
        };
    });
    
    $(".btngroup_l div").click(function(){
        if($(this).hasClass("active")){
            return(false);
        }
        else{
            aid=$(this).index();
            var onn = "-on";
            var foid = "float".concat(aid, onn);
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            $(".btngroup_b").removeClass().addClass("btngroup_b");
            $(".btngroup_b").addClass(foid);
            if(aid>=1){
                $(".top, .sec, footer").hide();
                $(".page").fadeIn();
                $(".sec").eq(aid - 1).fadeIn();
                $(".page").scrollTop(0);
                $("#particles-js").css("opacity","0.7");
                TweenMax.to($(".btnpic"), 1,{"margin-left" : "-920px"}, {ease : Circ.easeInOut});
            }
            else{
                $(".page, .sec").hide();
                $("footer").show();
                $(".top").fadeIn();
                $(".top").scrollTop(0);
                $("#particles-js").css("opacity","0");
                TweenMax.to($(".btnpic"), 1,{"margin-left" : "-690px"}, {ease : Circ.easeInOut});
            }
        }
    });
    $(".popup .close").click(function(){
        $(".popup").fadeOut();
    });
    $(".nav1 div").click(function(){
        cid=$(this).index();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".psi1").hide();
        $(".psi1").eq(cid).fadeIn();
        $('html,body').animate({scrollTop:$(".psi1").eq(cid).offset().top}, 500);
    });
});