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
});