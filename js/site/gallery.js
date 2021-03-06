$(function(){
    $('.js-btn--char').click(function(){
        $('.js-btn--crop').removeClass('active');
        $('.js-btn--char').addClass('active');
        $('._gallery').removeClass('crop');
        $('._gallery').addClass('char');
        $('._gallery__bg--color').css('background-color','#ddd658');
        setTimeout(function(){
            $('._gallery_crop__content').css('display','none');
        },500);
        
        console.log('char click');
    });
    $('.js-btn--crop').click(function(){
        $('._gallery_crop__content').css('display','block');
        setTimeout(function(){
            $('.js-btn--char').removeClass('active');
            $('.js-btn--crop').addClass('active');
            $('._gallery').removeClass('char');
            $('._gallery').addClass('crop');
            $('._gallery__bg--color').css('background-color','#a5b63d');
        },500);
        
        
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