$(document).ready(function() {
    $(".p1,.p2,.p3,.p4,.shadow,nav").css("display","none").fadeIn("slow");
    $(".wave").animate({marginLeft:"0px"},"slow");
    $(".page1,.page2").css("display","none");
    
    $("nav > .pict-b:nth-child(1)").click(function() {
      $(".contents").fadeOut(500);
      $(".page1").fadeIn(500);
  });
    $("nav > .pict-b:nth-child(2)").click(function() {
      $(".contents").fadeOut(500);
      $(".page2").fadeIn(500);
  });
        
    $(".pict-x").click(function() {
      $(".contents").fadeIn(500);
      $(".page1,.page2").fadeOut(500);
  });
});