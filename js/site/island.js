$(function () {
    var x = 0;
    var y = -90;
    var bgColor = ['#006781', '#4B8D32', '#D6CD25', '#006857', '#ED7235', '#FF947B', '#AF485C', '#F7B42F', '#AE7516', '#C99A6B', '#2E8E89', '#325984']
    var index = 0;
    var animArray = ['jan.json','feb.json','mar.json','apr.json','may.json','jun.json','july.json','aug.json','sep.json','oct.json'];
    var animIndex = 0;

    $('._island_intro__seasonSection--1').addClass('active');
    $('._island_intro__row--x').addClass('active');

    //island environment background slider  
    var swiper_bg = new Swiper('.swiper-container--bg', {
        loop: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true
        },
        mousewheel: true
    });

    // 讓island移到下一個
    swiper_bg.on('slideNextTransitionStart', function () {
        console.log('next');
        x = x + 90;
        y = y + 90;
        $('._island_intro__row--x').css("transform", "rotate(" + x + "deg)");
        $('._island_intro__row--y').css("transform", "rotate(" + y + "deg)");
    });
    // 讓island移回上一個
    swiper_bg.on('slidePrevTransitionStart', function () {
        console.log('prev');
        x = x - 90;
        y = y - 90;
        $('._island_intro__row--x').css("transform", "rotate(" + x + "deg)");
        $('._island_intro__row--y').css("transform", "rotate(" + y + "deg)");
    });


    swiper_bg.on('slideChangeTransitionStart', function () {
        console.log(this.activeIndex);
        index = this.activeIndex;

        if (index == 13) {
            index = 1;
        } else if (index == 0) {
            index = 12;
        }
        // circle背景色切換
        var i = index - 1;
        $('._island_intro__circle').css("background-color", bgColor[i]);
        $('._island_intro__view').css("background-color", bgColor[i]);
        animate(i);
        // 1-4月顯示
        if (index == 1 || index == 4) {
            console.log('circle1');
            $('._island_intro__seasonSection').removeClass('active');
            $('._island_intro__seasonSection--1').addClass('active');
        }
        // 5-8月顯示
        if (index == 5 || index == 8) {
            console.log('circle2');
            $('._island_intro__seasonSection').removeClass('active');
            $('._island_intro__seasonSection--2').addClass('active');
        }

        // 9-12月顯示
        if (index == 9 || index == 12) {
            console.log('circle3');
            $('._island_intro__seasonSection').removeClass('active');
            $('._island_intro__seasonSection--3').addClass('active');
        }


        if (index % 2 == 1) {
            //x軸月份顯示
            $('._island_intro__row--x').addClass('active');
            $('._island_intro__row--y').removeClass('active');
        } else {
            //y軸月份顯示
            $('._island_intro__row--y').addClass('active');
            $('._island_intro__row--x').removeClass('active');
        }
    });

    function animate(i) {
        animIndex = i;
    }

    //點了島嶼瀏覽的view
    $('._island_intro__btn').click(function () {
        var anim;
        console.log('animIndex: '+animIndex);
        var animData = {
            container: document.getElementById('bodymovin'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/2019inseason/img/json/' + animArray[animIndex]
        };

        // 先執行bodymovin才不會卡卡
        anim = bodymovin.loadAnimation(animData);

        //等bodymovin生出svg時再執行parallax.js
        anim.addEventListener('DOMLoaded', function () {

            // $("#bodymovin svg").attr("data-depth",1);
            // var scene = document.getElementById('bodymovin');
            // var parallaxInstance = new Parallax(scene, {
            //     relativeInput: true,
            //     // hoverOnly: true,
            //     originX:0,
            //     limitY:0,
            //     limitX: $("#bodymovin svg").width()-$(window).width(),

            // });  

            var container = document.querySelector("#bodymovin");
            var mover = document.querySelector("#bodymovin svg");
            var container_wd = $('#anim-container').innerWidth();
            var mover_wd = $('#bodymovin svg').innerWidth();
            var result = 0;
            var mouseX=0
            container.addEventListener("mousemove", function (e) {
                // console.log(e.pageX + ", " + e.pageY);
                // console.log(e.offsetX + ", " + e.offsetY);
                // console.log(-(e.pageX / container_wd) * (mover_wd - container_wd));
                
                mouseX = (e.pageX - (container_wd / 2)) / (container_wd - mover_wd);
                // console.log(mouseX);

                // result = (e.pageX / container_wd) * (container_wd - mover_wd);
                // mover.style.transform = "translate3d(" + Math.round(result) + 'px'+",0px , 0px)";
             

                // console.log(Math.round(result));
               


                
                // if(e.pageX>0 && e.pageX<200){
                //     moveX = moveX+10;
                //     if(moveX>0){
                //         moveX = 0;
                //         // move = 0;
                //     }else if(moveX < 0){
                //         mover.style.transform = "translate3d("+ moveX + 'px'+",0px , 0px)";
                //     }
                //     console.log(moveX);
                // }else if(e.pageX>1700 && e.pageX<1919){
                //     moveX = moveX - 10;
                //     if(moveX< -875){
                //         moveX = -875;
                //         // move = -875;
                //     }else if(moveX > -875){
                //         mover.style.transform = "translate3d("+ moveX + 'px'+",0px , 0px)";
                //     }
                //     console.log(moveX);
                // }
            });

            //滑鼠左右移動
            setInterval(function(){
                var speed= mouseX * 0.03;

                result += ((container_wd-mover_wd)-result)*speed;
                if(result<0){
                    result = 0;
                }else if(result>mover_wd-container_wd){
                    result = mover_wd-container_wd;
                }
                mover.style.transform = "translate3d(" + -Math.round(result) + 'px'+",0px , 0px)";
            },80);



            // 產物點選
            $('#cabbage').click(function () {
                $('._island_crop__shadow').css("display", "block");
                setTimeout(function () {
                    $('#js_cabbage').addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
        });
        setTimeout(function () {
            $('html').addClass('start_anim');
        }, 1000);
        setTimeout(function () {
            $('._island_intro').css("display", "none");
        }, 2000);
    });

    //點back to explore回到島嶼瀏覽頁
    $('.js-detail_back').click(function () {
        $('._island_intro').css("display", "block");
        $('._island_crop__shadow').css("display", "none");
        setTimeout(function(){
            $('html').removeClass('start_anim');
        }, 1000);
        
        setTimeout(function () {
            bodymovin.destroy();
        }, 2000);
    });


    $('.js-crop_close').click(function () {
        $('html').removeClass('popup');
        $(this).parent('._island_crop').removeClass('active');
    });

    $('#cabbage').hover(function(){
        $(this).attr("scale","1.2");
        console.log('hover');
    });

    
});