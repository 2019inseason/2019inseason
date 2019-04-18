$(function(){
    AOS.init();
    $('#scroll_down').click(function(){
        $('html,body').animate({scrollTop:$('#about_2').offset().top}, 500);
    });
    $('#scroll_top').click(function(){
        $('html,body').animate({scrollTop:$('#about_1').offset().top}, 500);
    });
    $('#scrollTo_2').click(function(){
        $('html,body').animate({scrollTop:$('#about_3').offset().top}, 500);
    });
    $('#scrollTo_3').click(function(){
        $('html,body').animate({scrollTop:$('#about_4').offset().top}, 500);
    });
});