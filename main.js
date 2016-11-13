$(document).ready(function(){
    var mq = window.matchMedia('(max-width: 480px)');
    var $img = $('.column img');
    if (mq.matches === true){
        // if screen is 480px max width
        $img.click(function(){
           $(this).siblings('.column-desc').slideDown();
        });

    } else {
        // screen is NOT matching media query
        $img.hover(function(){
            $(this).siblings('.column-desc').slideDown();
        }, function() {
            $(this).siblings('.column-desc').slideUp();
        });
    }
});