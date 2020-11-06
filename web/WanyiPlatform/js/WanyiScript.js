$(function(){    
    $("body").click(function(){
        $(".AlertWindow").fadeOut(500);
    });
    
    $("header.visible-xs #logo, .visible-xs .BtnMenu").click(function(){
        $("nav.hidden-lg").slideDown(500);
    });
    
    $("nav.hidden-lg #logo, nav.hidden-lg .BtnMenu").click(function(){
        $("nav.hidden-lg").slideUp(500);
    });
    
    $(".dropdown").hover(function(){
        $(this).find("ul, ol").stop(true,false).slideToggle(500);
    });
    
    $('.easy-sidebar-toggle-left').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('toggled-left');
        $('.easy-sidebar-left').removeClass('toggled-left');
        $('.easy-sidebar-left').toggle();
    });
    $('.easy-sidebar-toggle-right').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('toggled-right');
        $('.easy-sidebar-right').removeClass('toggled-right');
        $('.easy-sidebar-right').toggle();
    });
    
    $("div.GamePlay").hover(function(){
        $(this).find("button").slideToggle();
        $(this).children(".JackGame2").toggle();
    });

    $(".Pwd").click(function(){
  
      if($(this).prev('input').attr('type') == 'password'){
        changeType($(this).prev('input'), 'text');
        $(this).removeClass("glyphicon-eye-close").addClass("glyphicon-eye-open");}
      else{
        changeType($(this).prev('input'), 'password');
        $(this).removeClass("glyphicon-eye-open").addClass("glyphicon-eye-close");}
      return false;
    });
    
    $(".MainLabel span,.UserChart .UserTable span, .UserBankList td:not(:first-child) span:first-child, .JpGame h3 span, .JackGame2 span").each(function () {
    $(this).prop("Con",0).animate({
        Con: $(this).text()
    }, {
        duration: 500,
        easing: 'swing',
        step: function (now) {
            $(this).text(parseFloat(now).toFixed(2));
        }
        });
    });
    
    $("article .badge").each(function () {
    $(this).prop("Con",0).animate({
        Con: $(this).text()
    }, {
        duration: 500,
        easing: 'swing',
        step: function (now) {
            $(this).text(parseInt(now));
        }
    });
    
    var $news = $(".JpUser ul"), 
		scrollHeight = $news.find('li').outerHeight(true), 
		scrollSpeed = 5000, fadeInSpeed = 600, 
		timer, speed = 3000;
 
	// 用來控制輪播用
	function newsScroll(){
		// 先把 .abgne-news-scroll ul 往下移
		$news.animate({
			top: scrollHeight + 'px'
		}, scrollSpeed, function(){
			// 當 .abgne-news-scroll ul 移動到定點後
			// 先找出最後一個 li
			var $last = $news.find('li:last');
			// 複製一份並先隱藏起來
			// 接著把它加到 .abgne-news-scroll ul 中的第一個項目
			// 最後用淡入的方式顯示, 當顯示完後繼續輪播
			$last.clone().hide().prependTo($news).fadeIn(fadeInSpeed, function(){
				timer = setTimeout(newsScroll, speed);
			});
			// 馬上把 .abgne-news-scroll ul 移到 top 等於 0 的位置
			$news.css('top', 0);
			// 把 $last 移除掉
			$last.remove();
		});
	}
 
	// 啟動輪播計時器
	timer = setTimeout(newsScroll, speed);
});
    
function changeType(x, type) {
    if(x.prop('type') == type)
        return x; //That was easy.
    try {
        return x.prop('type', type); //Stupid IE security will not allow this
    } catch(e) {
        //Try re-creating the element (yep... this sucks)
        //jQuery has no html() method for the element, so we have to put into a div first
        var html = $("<div>").append(x.clone()).html();
        var regex = /type=(\")?([^\"\s]+)(\")?/; //matches type=text or type="text"
        //If no match, we add the type attribute to the end; otherwise, we replace
        var tmp = $(html.match(regex) == null ?
            html.replace(">", ' type="' + type + '">') :
            html.replace(regex, 'type="' + type + '"') );
        //Copy data from old element
        tmp.data('type', x.data('type') );
        var events = x.data('events');
        var cb = function(events) {
            return function() {
                //Bind all prior events
                for(i in events)
                {
                    var y = events[i];
                    for(j in y)
                        tmp.bind(i, y[j].handler);
                }
            }
        }(events);
        x.replaceWith(tmp);
        setTimeout(cb, 10); //Wait a bit to call function
        return tmp;
    }
}
    
});
