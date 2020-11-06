$(function(){
    $(".topbtn").click(function(){
        $("html, body").animate({scrollTop:0},500);
    });
    $(window).scroll(function() {        
        if ($(this).scrollTop() > 400){
            $(".topbtn").fadeIn("fast");
        } else {
            $(".topbtn").stop().fadeOut("fast");
        };
        /*if ($(this).scrollTop() > 400){
            $(".sec2").fadeIn("slow");
        } else {
            $(".sec2").stop().fadeOut("fast");
        };
        if ($(this).scrollTop() > 2000){
            $(".sec3").fadeIn("slow");
        } else {
            $(".sec3").stop().fadeOut("fast");
        };*/
    });
});