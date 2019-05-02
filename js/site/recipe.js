$(function(){
    var hash = window.location.hash;
    var split = hash.split('#');
    var result = split[1]-1
    console.log(split[1]);
    if( split[1] == undefined ){
        result = 0;
    }
    var swiper_recipe = new Swiper('.swiper-container--recipe', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
    var swiper_recipeAll = new Swiper('.swiper-container--recipeAll', {
        initialSlide: result,
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var fadeInDown = {
        opacity: '1',
        top : '50%',
        transition: '.55s ease-in-out',
        transitionDelay: '.2s'
    };

    var fadeOutUp = {
        opacity: '0',
        top : '53%',
        transition: '.55s ease-in-out',
        transitionDelay: '.2s'
    };

    swiper_recipeAll.on('slideNextTransitionStart', function () {
        console.log('next');
        $('.swiper-slide-prev').children().css(fadeOutUp);
        $('.swiper-slide-next').children().css(fadeOutUp);
        $('.swiper-slide-active').children().css(fadeInDown);
    });
    
    swiper_recipeAll.on('slidePrevTransitionStart', function () {
        console.log('prev');
        $('.swiper-slide-prev').children().css(fadeOutUp);
        $('.swiper-slide-next').children().css(fadeOutUp);
        $('.swiper-slide-active').children().css(fadeInDown);
    });
});