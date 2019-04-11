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
    
    //換頁效果套件
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1000,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });
});