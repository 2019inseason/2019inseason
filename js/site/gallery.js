$(function(){
    $('.js-btn--char').click(function(){
        $('.js-btn--crop').removeClass('active');
        $('.js-btn--char').addClass('active');
        $('._gallery').removeClass('crop');
        $('._gallery').addClass('char');
        console.log('char click');
    });
    $('.js-btn--crop').click(function(){
        $('.js-btn--char').removeClass('active');
        $('.js-btn--crop').addClass('active');
        $('._gallery').removeClass('char');
        $('._gallery').addClass('crop');
        console.log('crop click');
    });
    $('._gallery_char__col').hover(function(){
        console.log('hover');
        $(this).addClass('hover');
        $(this).find('._gallery_char__name').css('bottom','15px');
        $(this).find('._gallery_char__info').css('bottom','-23px');
    });
    $('._gallery_char__col').mouseleave(function(){
        console.log('leave');
        $(this).removeClass('hover');
        $(this).find('._gallery_char__name').css('bottom','0');
        $(this).find('._gallery_char__info').css('bottom','-8px');
    });
});