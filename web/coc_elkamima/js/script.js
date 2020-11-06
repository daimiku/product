$(function(){
    $(".menu>ul a").click(function(){
       id=$(this).index()-1;
       if($(this).not("active")){
           $(this).siblings(".active").removeClass("active");
           $(this).addClass("active");
           
           $("section .content").hide();
           $(".content").eq(id).fadeIn(500);
           $('html,body').animate({scrollTop:$(".content").eq(id).offset().top}, 500);
       }
    });   
    
});
