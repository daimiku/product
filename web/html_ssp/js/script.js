$(function(){
    TweenMax.to($(".logo-tw"), 1,{"opacity" : "1", "delay" : "1", ease : Circ.easeOut});
    TweenMax.to($(".logo-en"), 1,{"opacity" : "1", "delay" : "1", ease : Circ.easeOut});
    TweenMax.to($(".chara1"), 2,{"opacity" : "1", ease : Circ.easeOut});
    TweenMax.to($(".chara2"), 2,{"opacity" : "1", "delay" : "0.5", ease : Circ.easeOut});
    TweenMax.to($(".slogan-tw"), 1,{"opacity" : "1", "delay" : "1", ease : Circ.easeOut});
    TweenMax.to($(".slogan-en"), 1,{"opacity" : "1", "delay" : "1", ease : Circ.easeOut});
    
    function isMobile()
    {
        try{ document.createEvent("TouchEvent"); return true; }
        catch(e){ return false;}
    }
        
    /*var c = $(window).width();
    console.log(c);*/
    
    $(".nav li").click(function(){
        if(!$(this).hasClass("active")){
            aid=$(this).index();
            $(".nav li").removeClass("active");
            $(this).addClass("active");
            if(!isMobile()){
                if($(window).width() > 1499){
                    $("html, body").animate({scrollTop:700},500);
                }
                else if($(window).width() <= 1499){
                    $("html, body").animate({scrollTop:650},500);
                }
            }
            else{
                $("html, body").animate({scrollTop:650},500);
            }
            $(".cont").hide();
            $(".page>.cont").eq(aid).fadeIn();
        }
        else{
            return(false);
        }
    });
    
    /*$(".swiper-slide").click(function(){
        $(this).find("img").toggle();
        //$(this).find("img").eq(0).hide();
        //$(this).find("img").eq(1).show();
    })*/
    
    $("img.wp").click(function(){
        if($(this).hasClass("wp1")){
            $(".pop_view img").eq(0).show();
        }
        else if($(this).hasClass("wp2")){
            $(".pop_view img").eq(1).show();
        }
        else if($(this).hasClass("wp3")){
            $(".pop_view img").eq(2).show();
        }
        else if($(this).hasClass("wp4")){
            $(".pop_view img").eq(3).show();
        }
        $(".popbg").show();
        $(".pop").fadeIn();
    })
    $(".close").click(function(){
        $(".popbg, .pop, .pop_view img, .pop_vote1, .pop_vote2").hide();
    })
    
    $(".langbtn>.on").click(function(){
        return(false);
    })
    
    $(".btntw-b6, .btnen-b6, .btntw-b7, .btnen-b7").click(function(){
        $(".popbg, .pop").show();
        if($(this).hasClass("btntw-b6") || $(this).hasClass("btnen-b6")){
            $(".pop_vote1").fadeIn();
        }
        else if($(this).hasClass("btntw-b7") || $(this).hasClass("btnen-b7")){
            $(".pop_vote2").fadeIn();
            
        }
        return(false);
    })
});