$(function(){ 
    TweenMax.to($(".logo"), 1,{"opacity" : "1", "delay" : "0.5", ease : Circ.easeOut});
    TweenMax.to($(".main"), 2,{"opacity" : "1", ease : Circ.easeOut});
    TweenMax.to($(".btn-d1"), 1,{"opacity" : "1", "delay" : "1", ease : Circ.easeOut});
    TweenMax.to($(".btn-d2"), 1,{"opacity" : "1", "delay" : "1", ease : Circ.easeOut});
    
    var md = new MobileDetect(window.navigator.userAgent);
    //console.log(md.phone());
    
    if(!md.mobile()){
        $("#secGroup").fullpage({
            verticalCentered: false,
	        responsiveWidth: 1080,
	        loopHorizontal: false,
            anchors: ['top', 'page1', 'page2', 'page3', 'page4', 'footer'],
            menu: '#nav',
            onLeave: function(index, nextIndex, direction) {
			    var leavingSection = $(this);
          
                if(!md.mobile()){
                    if (index == 1 && direction == 'down') {
				        $("nav.right").fadeIn();
			        } 
                    else if (index == 2 && direction == 'up') {			
				        $("nav.right").fadeOut();
			        }
                }
			
            },
        });
    }
    else if(md.mobile()){        
        $("#nav a").click(function(){
            id = $(this).parent().index();
            $('html,body').animate({scrollTop:$("section").eq(id).offset().top}, 500);
            return false;
        });
    }

    
    $("#nav .btn-b1").click(function(){
        if(!$(this).hasClass("active")){
            $("nav.right").fadeOut();
        }
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
       $("nav.left").css("left","0");
    });
    
    $(".charbtn").click(function(){
        var n = $(this).attr("pop-id");
        $(".pop, .pop_main").fadeIn();
        $(".pop_chara").eq(n).show();
        $(".pop_main").removeClass("pop_main0, pop_main1");
        $(".pop_main").addClass("pop_main" + n);
        if(n==0){
            $(".pop_close").addClass("close_p");
        }
        else if(n==1){
            $(".pop_close").addClass("close_m");
        }
    });
    
    $(".pop_close, .pop_bg").click(function(){
       $(".pop_close").removeClass("close_p, close_m");
       $(".pop, .pop_main").fadeOut(); 
       $(".pop_movie, .pop_chara, .pop_pic, .pop_pic img").hide();
       /*$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');*/
       if(md.mobile()){
           $("nav.left").css("left","-300px");
       }
    });
    
    $(".p1_mov").hover(function(){
        $(".p1_mov>.play").css("background","transparent");
        $(".p1_mov>.mov").css("opacity","1");
    },function(){
        $(".p1_mov>.play").css("background","rgba(0, 84, 170, 0.7)");
        $(".p1_mov>.mov").css("opacity","60%");
    });
    /*$(".p1_mov").click(function(){
        $(".pop").fadeIn();
        $(".pop_movie").show();
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    });*/
    
    $(".slick-img a").click(function(){
       var n = $(this).attr("pop-id");
       $(".pop, .pop_pic").fadeIn();
       $(".pop_pic img").eq(n).show();
       return false;
    });
});