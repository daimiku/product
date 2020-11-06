$(function(){
    $(window).scroll(function() {        
        if ($(this).scrollTop() > 2530){
            $(".btn-group").removeClass("float-on").addClass("float-off");
        } else {
            $(".btn-group").removeClass("float-off").addClass("float-on");
        };
    });
    $(".chara1").hover(function(){
        $(".btn-b1").toggleClass("b1-hover");
    })
    $(".chara2").hover(function(){
        $(".btn-b2").toggleClass("b2-hover");
    })
    
    $(".chara1, .chara2").click(function(){
        $(".popup, .pop-dark-bg").show();
        TweenMax.to($(".popbg"), 0.4,{"width" : "1920px", ease : Expo.easeOut});
        TweenMax.to($(".close"), 0.4,{"margin-top" : "50px", ease : Expo.easeOut, delay: 0.2});
        if($(this).hasClass("chara1")){
            $(".pop-all:eq(0)").show();
            TweenMax.to($(".pop-all:eq(0)"), 0.8,{"opacity" : "1", ease : Expo.easeOut, delay: 0.2});
        }
        else if($(this).hasClass("chara2")){
            $(".pop-all:eq(1)").show();
            TweenMax.to($(".pop-all:eq(1)"), 0.8,{"opacity" : "1", ease : Expo.easeOut, delay: 0.2});
        }
    })
    
    $(".popup .close").click(function(){
        $(".popup").hide();
        $(".pop-dark-bg").fadeOut();
        $(".popbg").css({"width" : "0"});
        $(".close").css({"margin-top" : "0"});
        $(".pop-all").css({"opacity" : "0", "display" : "none"});
        $(".pop-cont").scrollTop(0);
    })
    
    $(".pop-nav1>li").click(function(){
        if($(this).hasClass("active")){
            return(false);
        }
        else{
            aid=$(this).index();
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            $(".pop-page-a").hide();
            $(".pop-page-a").eq(aid).fadeIn();
            $(".pop-page-a:eq(8)").fadeIn();
            $(".pop-cont-bg .bg-a").hide();
            $(".pop-cont-bg .bg-a").eq(aid).fadeIn();
            $(".pop-cont").scrollTop(0);
        }
    })
    $(".pop-nav2>li").click(function(){
        if($(this).hasClass("active")){
            return(false);
        }
        else{
            bid=$(this).index();
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            $(".pop-page-b").hide();
            $(".pop-page-b").eq(bid).fadeIn();
            $(".pop-page-b:eq(5)").fadeIn();
            $(".pop-cont-bg .bg-b").hide();
            $(".pop-cont-bg .bg-b").eq(bid).fadeIn();
            $(".pop-cont").scrollTop(0);
        }
    })
    
});