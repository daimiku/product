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
    
    $(".pic a").hover(function(){
       if($(this).children("div").children("img").size()>1){
           $(this).find("img").eq(0).toggle();
           $(this).find("img").eq(1).toggle();
       }
    });
    
    $(".mov").on("shown.bs.modal",function(e){
        $(this).find("video").get(0).play();
    });
    $(".mov").on("hidden.bs.modal",function(e){
        $(this).find("video").get(0).load();
        $(this).find("video").get(0).pause();
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
        if($(this).hasClass("disabled") || $(this).hasClass("active")){
            return false;
        }
    });
    $(".pagecontrol").change(function(){
       $(location).attr("href", "page" + $(this).val() + ".html" );
    });
    
    var nav = [
        "賣場用圖",
        "視覺BANNER",
        "長條BANNER",
        "網頁設計",
        "影片製作",
        "遊戲UI類",
    ];
    var link = [
        "0-2",
        "1-10",
        "2-8",
        "3-8",
        "4-1",
        "5-2",
    ];
    
    $("nav ul.text-center > li").each(function(){
       var a = $(this).index();
       $(this).html("<a href='page" + link[a] + ".html'>" + nav[a] + "</a>");
    });
    
    $(".pic2 a").click(function(){
       return false;
    });
});
