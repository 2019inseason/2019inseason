$(function(){
    $('._dish__tabBtn--ingredient').click(function(){
        $('._dish').addClass('js_ingredient');
        $('._dish').removeClass('js_recipe');
    });
    $('._dish__tabBtn--recipe').click(function(){
        $('._dish').addClass('js_recipe');
        $('._dish').removeClass('js_ingredient');
    });

});