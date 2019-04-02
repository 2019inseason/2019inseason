$(function(){
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

});