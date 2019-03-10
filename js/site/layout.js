$(function(){
    var x = 0;
    var y = -90;
    var bgColor = ['#006781', '#4B8D32', '#D6CD25', '#006857', '#ED7235', '#FF947B', '#AF485C', '#F7B42F', '#AE7516', '#C99A6B', '#2E8E89', '#325984']
    var index = 0;

    $('._island_intro__seasonSection--1').addClass('active');
    $('._island_intro__row--x').addClass('active');
    
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
        $('._island_intro__row--x').css("transform","rotate("+x+ "deg)");
        $('._island_intro__row--y').css("transform","rotate("+y+ "deg)");
    });
    // 讓island移回上一個
    swiper_bg.on('slidePrevTransitionStart', function(){
        console.log('prev');
        x = x-90;
        y = y-90;
        $('._island_intro__row--x').css("transform","rotate("+x+ "deg)");
        $('._island_intro__row--y').css("transform","rotate("+y+ "deg)");
    });


    swiper_bg.on('slideChangeTransitionStart', function(){
        console.log(this.activeIndex);
        index = this.activeIndex;

        if(index == 13){
            index = 1;
        }else if(index == 0){
            index = 12;
        }
        // circle背景色切換
        var i = index - 1;
        $('._island_intro__circle').css("background-color",bgColor[i]);
        $('._island_intro__view').css("background-color",bgColor[i]);

        // 1-4月顯示
        if(index == 1 || index == 4){
            console.log('circle1');
            $('._island_intro__seasonSection').removeClass('active');
            $('._island_intro__seasonSection--1').addClass('active');
        }
        // 5-8月顯示
        if(index == 5 || index == 8){
            console.log('circle2');
            $('._island_intro__seasonSection').removeClass('active');
            $('._island_intro__seasonSection--2').addClass('active');
        }

        // 9-12月顯示
        if(index == 9 || index == 12){
            console.log('circle3');
            $('._island_intro__seasonSection').removeClass('active');
            $('._island_intro__seasonSection--3').addClass('active');
        }

        
        if(index%2 == 1 ){
            //x軸月份顯示
            $('._island_intro__row--x').addClass('active');
            $('._island_intro__row--y').removeClass('active');
        }else{
            //y軸月份顯示
            $('._island_intro__row--y').addClass('active');
            $('._island_intro__row--x').removeClass('active');
        }
    });

    //點了島嶼瀏覽的view
    $('._island_intro__btn').click(function(){

        // 先執行bodymovin才不會卡卡
        bodymovin.loadAnimation(animData);
        
        setTimeout(function(){
            $('._island_intro').addClass('active');
            $('._island_intro__bgImg').addClass('active');
            $('._island_detail__bg').addClass('active');
        }, 300);
        
        
        
    });

   // bodymovin
    var animData = {
        wrapper: document.getElementById('bodymovin'),
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: true,
        path: '/inseason/img/json/feb.json'
    };
        
});