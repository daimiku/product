$(function(){
    $("nav li:eq(1)").click(function(){
       alert("即將公開");
       return(false);
    });
    $("nav li.active, .btn.active").click(function(){
       return(false);
    });
    
    $(".r18").click(function(){
       alert("以下是18禁的內容，確定已滿規定之年齡");
    });
    
    $(".btn:not(.active)").hover(function(){
       $(this).children("a").css("color","#e34858");
    },function(){
       $(this).children("a").css("color","#ffffff");
    });
    
    $(".picbtn .btn").hover(function(){
       $(this).find(".vote").addClass("hover");
    },function(){
       $(this).find(".vote").removeClass("hover");
    });
    $(".btngroup2 .btn").hover(function(){
       $(this).find(".vote, .fb").addClass("hover");
    },function(){
       $(this).find(".vote, .fb").removeClass("hover");
    });
});