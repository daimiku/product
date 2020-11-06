$(function(){
    $("nav>ul li").click(function(){
       id=$(this).index();
       if($(this).not("active")){
           $(this).siblings(".active").removeClass("active");
           $(this).addClass("active");
           
           $("section:lt(12)").hide();
           $("section").eq(id).fadeIn(500);
           $('html,body').animate({scrollTop:$("section").eq(id).offset().top}, 500);
       }
    });   
    
});
