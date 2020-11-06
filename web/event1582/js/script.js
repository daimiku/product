$(document).ready(function() {
  $(".layer,.pic,.say,nav").css("display","none").fadeIn('slow');
  $(".bg").animate({marginTop:"0px"},"slow");
  $(".page").css("display","none");
    
  $("a.pict-b1").click(function() {
  $("div.page").fadeToggle(500,function(){
      $('html,body').animate({scrollTop:$('.page').offset().top}, 500);
  });
});
    
});

