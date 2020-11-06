$(function(){
    var x = $(".characters span").size();
    var c = 'con-'.concat(x);
    $(".characters").addClass(c);
    
    $("#prereg, #prereg-success, #prereg-failed").on('show.bs.modal',function(){
        $("body").addClass("modal-fixed");
    });
    $("#prereg, #prereg-success, #prereg-failed").on('hide.bs.modal',function(){
        $("body").removeClass("modal-fixed");
    });
});

/**origin**/
$(function () {
        $('.js-prereg-button input:checkbox').change(function () {
            $('input:checkbox').not(this).prop("checked", this.checked);
        });

      /*if (device.tablet() || device.mobile()) {
        var parentBody = document.querySelector("html");
        parentBody.classList.remove('android','tablet','portrait');
        $('.prereg-button > *').hide();
        $('.prereg-button').addClass('device-btn img');
        $(".invisible").addClass("visible").removeClass("invisible");
      }*/

        // Submit
        /*$(".js-prereg-btn").click(function () {
            if (isRegisteredLoginUser) {
                $("#form1").submit();
            }
        });*/

        // Display Animations
        //if (device.desktop()) {
            $('.js-bounce-in').viewportChecker({
                classToAdd: 'visible animated bounceIn'
            });

            $('.js-fade-in').viewportChecker({
                classToAdd: 'visible animated fadeIn'
            });

            $('.js-fade-in-left').viewportChecker({
                classToAdd: 'visible animated fadeInLeft'
            });

            $('.js-fade-in-right').viewportChecker({
                classToAdd: 'visible animated fadeInRight'
            });

            $('.js-fade-in-up').viewportChecker({
                classToAdd: 'visible animated fadeInUp'
            });

            $('.js-fade-in-up-fixed').viewportChecker({
                classToAdd: 'visible animated fadeInUpFixed'
            });

            $('.js-zoom-in').viewportChecker({
                classToAdd: 'visible animated zoomIn'
            });

            $('.js-sequential-zoom-in').viewportChecker({
                classToAdd: 'activate',
                removeClassAfterAnimation: true,
                callbackFunction: zoomInSequential
            });
        //}

        // Images lightbox init
        $('.js-carousel > a').simpleLightbox();
        if($(window).width() < 720){
            $('.img-2, .img-4').remove();
        }
        $('.js-screens > a').simpleLightbox();
    });

    function zoomInSequential() {
        var timeOut = 0;

        $('.js-sequential-zoom-in.activate > *').each(function () {
            var that = $(this);

            setTimeout(function () {
                that.addClass('visible animated zoomIn');
            }, timeOut);

            timeOut = timeOut + that.parent().data('timeout');
        });
    }