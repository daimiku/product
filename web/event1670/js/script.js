$(document).ready(function() {
    $(".hdr,nav").css("display","none").fadeIn("slow");
    $(".bg1").animate({marginTop:"-50px"},"slow");
    $(".page1,.page2,.page3,.page4,.page0,.bgA,.bgB,.bgC,.bgD").css("display","none");
    
    $(".pict-b1").click(function() {
      $("div.page2,div.page3,div.page4,.bg0,.bgB,.bgC,.bgD").fadeOut(500);
      $("div.page1,div.page0,.bgA").fadeIn(500);
      $('html,body').animate({scrollTop:$('.bgA').offset().top}, 500);
      $(".bbb").attr("href","http://golden.goldengame.com.tw/rank/rank_race.php?year=2015&month=12&rank_raceType=1003&rank_raceName=2331");
  });
    
    $(".pict-b2").click(function() {
      $("div.page1,div.page3,div.page4,.bg0,.bgA,.bgC,.bgD").fadeOut(500);
      $("div.page2,div.page0,.bgB").fadeIn(500);
      $('html,body').animate({scrollTop:$('.bgB').offset().top}, 500);
      $(".bbb").attr("href","http://golden.goldengame.com.tw/rank/rank_race.php?year=2015&month=12&rank_raceType=1005&rank_raceName=2333");
  });
    
    $(".pict-b3").click(function() {
      $("div.page1,div.page2,div.page4,.bg0,.bgA,.bgB,.bgD").fadeOut(500);
      $("div.page3,div.page0,.bgC").fadeIn(500);
      $('html,body').animate({scrollTop:$('.bgC').offset().top}, 500);
      $(".bbb").attr("href","http://golden.goldengame.com.tw/rank/rank_race.php?year=2015&month=12&rank_raceType=1004&rank_raceName=2332");
  });
    
    $(".pict-b4").click(function() {
      $("div.page1,div.page2,div.page3,.bg0,.bgA,.bgB,.bgC").fadeOut(500);
      $("div.page4,div.page0,.bgD").fadeIn(500);
      $('html,body').animate({scrollTop:$('.bgD').offset().top}, 500);
      $(".bbb").attr("href","http://golden.goldengame.com.tw/rank/rank_race.php?year=2015&month=12&rank_raceType=1006&rank_raceName=2334");
  });
        
    $(".pict-x").click(function() {
      $(".contents").fadeIn(500);
      $(".page1,.page2,.page3,.page4,.page0").fadeOut(500);
  });
    
  $(".nav2 > a").hover(function() {
        $(".pict-b0").css('backgroundPosition', '0 -34px').fadeIn(600);
    },function() {
        $(".pict-b0").css('backgroundPosition', '0 0').fadeIn(600);
    });
});