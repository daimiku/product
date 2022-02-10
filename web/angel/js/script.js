$(function(){
    TweenMax.to($(".logo"), 1,{"opacity" : "1", "delay" : "0.5", ease : Circ.easeOut});
    TweenMax.to($(".main"), 2,{"opacity" : "1", ease : Circ.easeOut});
    TweenMax.to($(".slogan1"), 2,{"opacity" : "1", "delay" : "1", ease : Circ.easeOut});
    TweenMax.to($(".slogan2"), 2,{"opacity" : "1", "delay" : "1", ease : Circ.easeOut});
    TweenMax.to($(".btn-d1"), 1,{"opacity" : "1", "delay" : "1", ease : Circ.easeOut});
    
    var md = new MobileDetect(window.navigator.userAgent);
    //console.log(md.phone());
    
    $(".nav a[href='#']").click(function(){
        id = $(this).parent().index() - 1;
        if(!md.mobile()){
            $('html,body').animate({scrollTop:$("section").eq(id).offset().top - 100}, 500);
        }
        else if(md.mobile()){
            $('html,body').animate({scrollTop:$("section").eq(id).offset().top}, 500);
        }
        return false;
    });
    
    $('.slick-img').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slick-word',
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    $('.slick-word').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      asNavFor: '.slick-img'
    });
    
    $(".navbtn").click(function(){
       $(".pop").fadeIn(); 
       $("nav").css("left","0");
    });
    
    $(".pop_close, .pop_bg").click(function(){
       $(".pop").fadeOut(); 
       $(".pop_pic, .pop_pic img").hide();
       if(md.mobile()){
           $("nav").css("left","-340px");
       }
    });
    
    $(".slick-img a").click(function(){
       var n = $(this).attr("pop-id");
       $(".pop, .pop_pic").fadeIn();
       $(".pop_pic img").eq(n).show();
       return false;
    });
});