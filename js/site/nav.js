//nav區域相關動態
$(function(){
    //headroom套件
    // $("#nav").headroom();
    //點漢堡選單出現menu
    $('#nav-bar').click(function(){
        $('html').toggleClass('MenuOpen');
    });
    //點漢堡選單內的項目會收起來
    $('._nav_menu__title').click(function(){
        $('html').removeClass('MenuOpen');
    });
    $('._nav_menu__close').click(function() {
        $('html').removeClass('MenuOpen');
    })
    //點選單項目會向下移動到該區域位子
    // $('.nav-about').click(function(){
    //     $('html,body').animate({scrollTop:$('#about').offset().top}, 500);
    //     $('._nav__title').removeClass('active');
    //     $('.nav-about').addClass('active');
    // });
    // $('.nav-service').click(function(){
    //     $('html,body').animate({scrollTop:$('#service').offset().top}, 500);
    //     $('._nav__title').removeClass('active');
    //     $('.nav-service').addClass('active');
    // });
    // $('.nav-capability').click(function(){
    //     $('html,body').animate({scrollTop:$('#capability').offset().top-130}, 500);
    //     $('._nav__title').removeClass('active');
    //     $('.nav-capability').addClass('active');
    // });
    // $('.nav-product').click(function(){
    //     $('html,body').animate({scrollTop:$('#product').offset().top}, 500);
    //     $('._nav__title').removeClass('active');
    //     $('.nav-product').addClass('active');
    // });
    // $('.nav-network').click(function(){
    //     $('html,body').animate({scrollTop:$('#network').offset().top}, 500);
    //     $('._nav__title').removeClass('active');
    //     $('.nav-network').addClass('active');
    // });
    // $('.nav-contact').click(function(){
    //     $('html,body').animate({scrollTop:$('#contact').offset().top}, 500);
    //     $('._nav__title').removeClass('active');
    //     $('.nav-contact').addClass('active');
    // });

    // $('.nav-aviation').click(function(e){
    //     $('html,body').animate({scrollTop:$('#aviation').offset().top-130}, 500);
    //     e.preventDefault();
    // });
    // $('.nav-marine').click(function(e){
    //     $('html,body').animate({scrollTop:$('#marine').offset().top-130}, 500);
    //     e.preventDefault();
    // });
    // $('.nav-defense').click(function(e){
    //     $('html,body').animate({scrollTop:$('#defense').offset().top-130}, 500);
    //     e.preventDefault();
    // });
    // $('.nav-rfcable').click(function(e){
    //     $('html,body').animate({scrollTop:$('#rfcable').offset().top-130}, 500);
    //     e.preventDefault();
    // });
});