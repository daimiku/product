$(function(){
    TweenMax.to($(".logo"), 1,{"opacity" : "1"}, {ease : Circ.easeInOut});
    TweenMax.to($(".title"), 1,{"margin-top" : "60px"}, {ease : Circ.easeInOut});
    TweenMax.to($(".chara"), 1,{"opacity" : "1"}, {ease : Circ.easeInOut});
    TweenMax.to($(".btngroup"), 1,{"opacity" : "1"}, {ease : Circ.easeInOut});
    
    $(".btn-a6, .btn-b6").click(function(){
        alert("12/4後公布");
        return(false);
    });
    $(".btn-a4, .btn-b4, .btn-a5, .btn-b5").click(function(){
        return(false);
    });
    
    $(".btn-a1, .btn-a2, .btn-a3").click(function(){
        $("html, body").scrollTop(0);
        TweenMax.to($(".logo"), 0.5,{"margin-left": "-560px"}, {ease : Circ.easeInOut});
        $(".top").fadeOut();
        $(".page").fadeIn();        
        if($(this).hasClass("btn-a1")){
            $(".sec1").fadeIn();
        }
        else if($(this).hasClass("btn-a2")){
            $(".sec2").fadeIn();
        }
        else if($(this).hasClass("btn-a3")){
            $(".sec3").fadeIn();
        }
        return(false);
    });
    
    $(".btn-b1, .btn-b2, .btn-b3").click(function(){
        $("html, body").scrollTop(0);
        $(".sec1, .sec2, .sec3").hide();
        if($(this).hasClass("btn-b1")){
            $(".sec1").fadeIn();
        }
        else if($(this).hasClass("btn-b2")){
            $(".sec2").fadeIn();
        }
        else if($(this).hasClass("btn-b3")){
            $(".sec3").fadeIn();
        }
        return(false);
    });
    
    $(".title_c").click(function(){
        $("html, body").scrollTop(0);
        TweenMax.to($(".logo"), 0.5,{"margin-left": "-132px"}, {ease : Circ.easeInOut});
        $(".top").fadeIn();
        $(".page").fadeOut();
        $(".sec1, .sec2, .sec3, .sec6").hide();
        return(false);
    });
});