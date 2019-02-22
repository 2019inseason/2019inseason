$(function(){
    var $defaultPr__rwd = $('#productTab--rwd ._product__tab-a').eq(0).addClass('active');
    var $defaultPr = $('#productTab li').eq(0).addClass('active');
    //計算視窗大小
    windowWidth();
$(window).resize(function(){
    windowWidth();
});
function windowWidth(){
    var w = $(window).width();
//     console.log(w);
    //點擊product Tab標籤
    if(w>767){
        $($defaultPr.find('a').attr('href')).siblings().addClass('hide');
        $('#productTab li').click(function() {
            var $this = $(this);
            _clickTab = $this.find('a').attr('href');
            $this.addClass('active').siblings('.active').removeClass('active');
            $(_clickTab).removeClass('hide').siblings().addClass('hide');
            $('html,body').animate({scrollTop:$('#product').offset().top}, 500);
            productChange();
            return false;
            
        });
        
        // .find('a').focus(function(){
        //     this.blur();
        // });
     }
    }
    // else{
        
        // $('#productTab--rwd a').click(function(e){
        //     e.preventDefault();
        // });

        $($defaultPr__rwd).siblings().removeClass('active');
    
        // swiper_product.animating = true;
        // swiper_product.on('slideChange',function(){
        //     // $('._product__tab-a').removeClass('active');
        //     console.log(this);
        $('#productTab--rwd ._product__tab-a').click(function() {
            var $this = $(this);
            // var _current = $('#productTab--rwd ._product__tab-a').eq(this.activeIndex);
            $this.addClass('active').siblings('.active').removeClass('active');
        });
            
            // _currentTab = _current.find('a').attr('href');
            
            // $('html, body').animate({
            //     scrollTop: $('._product__title').offset().top + 100
            // }, 0);
            // console.log('scroll');
            // $('.wrapper').removeClass('headroom--pinned').addClass('headroom--unpinned');
            // $('#nav').removeClass('headroom--pinned').addClass('headroom--unpinned');

                
        // });
    // }
// }

//計算背景圖需要幾條線
    calcBg();
    $(window).resize(function(){
        calcBg();
        productChange();
    });
    function calcBg(){
        var _w = $(window).width();
        if(_w<1800 && _w>768){
            $('._global__bg').css({'background-size':Math.ceil(_w/6)+'px auto'});
            //$('._global-bg').css({'background-size':(100/6)+'% auto'});
            // console.log(_w,Math.ceil(_w/6)*6);
        } else if(_w>1800){
            var _per = Math.round(_w/300);
            if(_per%2 == 1){
                _per++; 
            }
            $('.container').css({'max-width':(_w/_per)*6+'px'});
            $('._global__bg').css({'background-size':Math.ceil(_w/_per)+'px auto'});
        }else{
            $('._global__bg').css({'background-size':Math.ceil(_w/3)+'px auto'});
        }
    }
//headroom套件

    $(".wrapper").headroom();


// //product&network tab標籤
    // var $defaultPr = $('#productTab li').eq(_showTab).addClass('active');
    // $($defaultPr.find('a').attr('href')).siblings().hide();
    var $defaultNet = $('#networkTab li').eq(0).addClass('active');
    $($defaultNet.find('a').attr('href')).siblings().hide();
    $('._network__list li').addClass('active');

// //點擊product Tab標籤
//     if(w>768){
//         $('#productTab li').click(function() {
//             var $this = $(this);
//             _clickTab = $this.find('a').attr('href');
//             $this.addClass('active').siblings('.active').removeClass('active');
//             $(_clickTab).stop(false, true).fadeIn().siblings().hide();
//             $('html,body').animate({scrollTop:$('#product').offset().top}, 500);
//             productChange();
//             return false;
//         }).find('a').focus(function(){
//             this.blur();
//         });
//     }
//點擊network Tab標籤
    $('#networkTab li').click(function() {
        $('._network__list li').removeClass('active');
        var $this = $(this);
        $this.addClass('active').siblings('.active').removeClass('active');
        $_activeClass = $this.find('a').attr('data-class');
        $($_activeClass).addClass('active');
    });
//textarea字數超過會自動向下展開
    $('textarea[data-autoresize]').each(function() {
        var offset = this.offsetHeight - this.clientHeight;

        var resizeTextarea = function(el) {
            $(el).css('height', 'auto').css('height', el.scrollHeight + offset);
        };
            $(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
    });
initScrollMagic();

//Header auto slider
var swiper_header = new Swiper('.swiper-container--header', {
    effect: 'fade',
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
  });

//Product slider  
var swiper_product1 = new Swiper('.swiper-container--product', {
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    }
});
});