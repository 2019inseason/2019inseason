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
    var swiper_recipeAll = new Swiper('.swiper-container--recipeAll', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});