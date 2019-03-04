$(function(){
    var x = 0;
    var y = -90;
    var bgColor = ['#006781', '#4B8D32', '#D6CD25', '#006857', '#ED7235', '#FF947B', '#AF485C', '#F7B42F', '#AE7516', '#C99A6B', '#2E8E89', '#325984']
    var index = 0;

    $('._island-intro__seasonSection--1').addClass('active');
    $('._island-intro__row--x').addClass('active');
    
    //island environment background slider  
    var swiper_bg = new Swiper('.swiper-container--bg', {
        loop: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        mousewheel:true
    });

    // 讓island移到下一個
    swiper_bg.on('slideNextTransitionStart', function(){
        console.log('next');
        x = x+90;
        y = y+90;
        $('._island-intro__row--x').css("transform","rotate("+x+ "deg)");
        $('._island-intro__row--y').css("transform","rotate("+y+ "deg)");
    });
    // 讓island移回上一個
    swiper_bg.on('slidePrevTransitionStart', function(){
        console.log('prev');
        x = x-90;
        y = y-90;
        $('._island-intro__row--x').css("transform","rotate("+x+ "deg)");
        $('._island-intro__row--y').css("transform","rotate("+y+ "deg)");
    });


    swiper_bg.on('slideChangeTransitionStart', function(){
        console.log(this.activeIndex);
        index = this.activeIndex;

        // circle背景色切換
        var i = index - 1;
        $('._island-intro__circle').css("background-color",bgColor[i]);

        // 1-4月顯示
        if(index == 1 || index == 4 || index == 13){
            console.log('circle1');
            $('._island-intro__seasonSection').removeClass('active');
            $('._island-intro__seasonSection--1').addClass('active');
        }
        // 5-8月顯示
        if(index == 5 || index == 8){
            console.log('circle2');
            $('._island-intro__seasonSection').removeClass('active');
            $('._island-intro__seasonSection--2').addClass('active');
        }

        // 9-12月顯示
        if(index == 9 || index == 0 || index == 12){
            console.log('circle3');
            $('._island-intro__seasonSection').removeClass('active');
            $('._island-intro__seasonSection--3').addClass('active');
        }

        
        if(index%2 == 1 ){
            //x軸月份顯示
            $('._island-intro__row--x').addClass('active');
            $('._island-intro__row--y').removeClass('active');
        }else{
            //y軸月份顯示
            $('._island-intro__row--y').addClass('active');
            $('._island-intro__row--x').removeClass('active');
        }
    });
});