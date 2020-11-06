$(function(){
    TweenMax.to($(".main"), 1,{"opacity" : "1"}, {ease : Circ.easeInOut});
    
    $(".btngroup_l div").click(function(){
        if(!$(this).hasClass("active")){
        $("html, body").scrollTop(0);
        $(".btn-l1, .btn-l2, .btn-l3, .btn-l4").removeClass("active");
        $(this).addClass("active");
        $(".top, .sec1, .sec2, .sec3").hide();
        if($(this).hasClass("btn-l1")){
            $(".top").fadeIn();
            $(".page").hide();
            $(".btn-sec2").addClass("hide");
            TweenMax.to($(".btngroup_r"), 0.5,{"top": "236px"}, {ease : Circ.easeInOut});
            $("#particles-js").css("opacity","0");
        }
        else if($(this).hasClass("btn-l2")){
            $(".page, .sec1").fadeIn();
            $(".btn-sec2").addClass("hide");
            TweenMax.to($(".btngroup_r"), 0.5,{"top": "236px"}, {ease : Circ.easeInOut});
            $("#particles-js").css("opacity","1");
        }
        else if($(this).hasClass("btn-l3")){
            $(".page, .sec2").fadeIn();
            $(".btn-sec2").removeClass("hide");
            TweenMax.to($(".btngroup_r"), 0.5,{"top": "136px"}, {ease : Circ.easeInOut});
            $("#particles-js").css("opacity","0.7");
        }
        else if($(this).hasClass("btn-l4")){
            $(".page, .sec3").fadeIn();
            $(".btn-sec2").addClass("hide");
            TweenMax.to($(".btngroup_r"), 0.5,{"top": "236px"}, {ease : Circ.easeInOut});
            $("#particles-js").css("opacity","0.81");
        }
        }
        return(false);
    });
});