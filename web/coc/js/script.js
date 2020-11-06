$(function(){
    $(".menuall").addClass("active");
    $(".tabs li").not(".menu5").click(function(){
       mid=$(this).index();
       if($(this).not("active")){
           $(this).siblings(".active").removeClass("active");
           $(this).addClass("active");
           $(".tab_content").hide();
           $(".tab_container .tab_content").eq(mid).show();
       }
       return false; 
    });
    
    $("a[data-toggle='collapse']").click(function(){
        tog=$(this).attr("href");
        topa=$(this).attr("data-parent");
        if($(tog).hasClass("in")){ //open2close
        $(this).find("span").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
        }
      else{ //close2open
        $(topa).find("span").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
        $(this).find("span").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
      }
    });
    
    $(".pwd").click(function(){
        if($(this).prev("input").attr("type") == "password"){
        changeType($(this).prev("input"), "text");
        $(this).removeClass("glyphicon-eye-close").addClass("glyphicon-eye-open");}
      else{
        changeType($(this).prev("input"), "password");
        $(this).removeClass("glyphicon-eye-open").addClass("glyphicon-eye-close");}
      return false;
    });
    
    $(".tbc").click(function(){
      alert("敬請期待");
    });
    
    $(".topbtn").click(function(){
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 0
		}, 300);
    });
    
    $(".xsbtn").click(function(){
       $(".xsnav").slideToggle();
       $(this).toggleClass("glyphicon-menu-hamburger").toggleClass("glyphicon-remove");
    });
    
    $(".guide-btn button").click(function(){
       gid=$(this).index();
       if($(this).not("active")){
           $(this).siblings(".active").removeClass("active");
           $(this).addClass("active");
           $(this).parent().parent().find(".guide-sub").not(".hide").addClass("hide");
           $(this).parent().parent().find(".guide-sub").eq(gid).removeClass("hide");
       }
    });
    
    $(".shop-btn button").click(function(){
       gid=$(this).index();
       if($(this).not("active")){
           $(this).siblings(".active").removeClass("active");
           $(this).addClass("active");
           $(this).parent().parent().find(".shop-sub").not(".hide").addClass("hide");
           $(this).parent().parent().find(".shop-sub").eq(gid).removeClass("hide");
       }
    });
    
    $("select[name='shop']").change(function(){
        sva=$(this).find(":selected").attr("value");
        //alert(sva);
        $(this).parents(".col-lg-6").find("span.value").text(sva);
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
