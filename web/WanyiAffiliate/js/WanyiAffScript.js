$(function(){    
    
    $("body").click(function(){
        $(".AlertWindow").fadeOut(500);
    });
    
    $("nav li").hover(function(){
        $(this).children("a").css("color","#ffa700");
    },function(){
        $(this).children("a").css("color","#fff");
    });
    
    $(".dropdown").hover(function(){
        $(this).find("ul").stop(true,false).slideDown(500);
    },function(){
        $(this).find("ul").stop(true,false).slideUp(500);
    });
    
    $(".ChangeModal").click(function(){
        $(this).parents(".modal").modal('hide');
        $('body').css("padding-right","0");
    });
    
    $(".Num").each(function () {
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
    
    $(".NewPwd").each(function(){
    $(this).complexify({}, function(valid, complexity){
        $(this).parent().siblings().find(".progress-bar-danger").css({'width': complexity + "%"});
        $(this).parent().siblings(".PwdComplex").text(Math.round(complexity) + "%");
    });
    });
    
    $(".ChannelPanel textarea").focus(function(){
    $(this).select();
    });
    
    $(".AllOldReport").on("click", function() {
    $(".OldReport").prop("checked", this.checked);
    });

    $(".OldReport").on("click", function() {
        if ($(".OldReport:checked").length == $(".OldReport:input").length){
      $(".AllOldReport").prop("checked", 'checked');
        }else{
            $(".AllOldReport").prop("checked", false);
        }
    });
});