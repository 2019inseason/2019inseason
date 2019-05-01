$(function(){
    var fadeInDown = {
        opacity: '1',
        top : '50%',
        transition: '.55s ease-in-out',
        transitionDelay: '.4s'
    };

    var fadeOutUp = {
        opacity: '0',
        top : '55%',
        transition: '.55s ease-in-out',
        transitionDelay: '.4s'
    };

    $('.swiper-slide-prev').children().css(fadeOutUp);
    $('.swiper-slide-next').children().css(fadeOutUp);

    $('.swiper-button-next').click(function(){
        $('.swiper-slide-prev').children().css(fadeOutUp);
        $('.swiper-slide-next').children().css(fadeOutUp);
        $('.swiper-slide-active').children().css(fadeInDown);
        
    });

    $('.swiper-button-prev').click(function(){
        $('.swiper-slide-prev').children().css(fadeOutUp);
        $('.swiper-slide-next').children().css(fadeOutUp);
        $('.swiper-slide-active').children().css(fadeInDown);
        
    });
});