$(function(){
    $(".carousel").carousel({
        interval: 6000
    });
    
    $(window).scroll(function(){
        var win_h = $(document).scrollTop();
        if(win_h >= $("nav.container-fluid").height()){
            $("nav.container-fluid").addClass("fixed-strip");
            $("nav.xsnav").css("position","fixed").css("top","60px");
            $(".indextop").css("margin-top","100px");
        }
        else{
            $("nav.container-fluid").removeClass("fixed-strip");
            $("nav.xsnav").css("position","absolute");
            $(".indextop").css("margin-top","0px");
        }
    });
    
    $(".navbtn").click(function(){
       $(".xsnav").slideToggle();
    });
    $(".compain-btn2").hover(function(){
       $(this).prev(".compain-box").toggleClass("hover");
    });
    
    $(".compainnav ul a").click(function(){
        if($(this).parent().hasClass("hidden-xs"))
        $pthis = $(this).index() - 1;
        else
        $pthis = $(this).index();
        
        $("html,body").animate({scrollTop:$(".page article").eq($pthis).offset().top}, 500);
        $(".xsnav").slideUp();
    });
});