$(function(){    
    $("a[data-toggle=collapse]").click(function(){
      if($(this).next(".collapse").attr("aria-expanded") == "false"){
         $(this).siblings(".collapse").removeClass("in").attr("aria-expanded","false").slideUp(500);
         $(this).next(".collapse").slideDown().addClass("in").attr("aria-expanded","true");}
      else{
        $(this).next(".collapse").removeClass("in").attr("aria-expanded","false").slideUp();}
      return false;
    });
    
    $("[data-toggle=popover]").popover();
    
    $(".Count span").each(function () {
    $(this).prop("Con",0).animate({
        Con: $(this).text()
    }, {
        duration: 500,
        easing: 'swing',
        step: function (now) {
            $(this).text(parseInt(now));
        }
        });
    });
    
    $(".Bonus button").click(function(){
        window.open($(this).parent().attr("href"),"_blank");
        return false;
    });
});