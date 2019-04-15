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
            // clickable: true
        },
        mousewheel: true,
        
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

            function makeSVG(tag, attrs) {
                var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
                for (var k in attrs)
                    el.setAttribute(k, attrs[k]);
                return el;
            }
            var test1= makeSVG('svg', {id: 'test1', xmlns:'http://www.w3.org/2000/svg',x:-1.9, y:-1.8});
            document.getElementById('cabbage').appendChild(test1);
            var test2= makeSVG('path', {id: 'test2', d:'M137.52,14.47c-1-.76-2.09-1.64-3.24-2.69a34.34,34.34,0,0,1-4.95-5.66C125.76,1.06,121.56,0,118.66,0a14.42,14.42,0,0,0-7.12,2c-14.65,3-16.78,13.36-17,17.81a35,35,0,0,0-1.25,3.75,11.75,11.75,0,0,0-3.78-.62,14.46,14.46,0,0,0-6.44,1.63c-1.15-2.46-3.1-4-5.17-5.63-1-.76-2.07-1.63-3.21-2.67a34.29,34.29,0,0,1-5-5.66C66.17,5.55,62,4.49,59.07,4.49a14.42,14.42,0,0,0-7.12,2C37.3,9.47,35.17,19.85,35,24.3a46.3,46.3,0,0,0-2.35,8.58l0,.2-.12.66a11.64,11.64,0,0,0-5.62-1.42,14.34,14.34,0,0,0-7.1,2c-14.66,3-16.78,13.36-17,17.81a45.8,45.8,0,0,0-2.36,8.6l0,.18c-.68,3.5-1.71,15.26,13.9,19.69,1,.3,2.1.58,3.12.81a42,42,0,0,0,9.37,1.21,19.69,19.69,0,0,0,8.88-1.85C46.29,76.65,52,68.85,52,58.21A15.4,15.4,0,0,0,51.43,54a39.81,39.81,0,0,0,7.51.81,24.94,24.94,0,0,0,3.75-.28c-.11,5,1.79,13.18,14.21,16.71,1,.3,2.1.57,3.12.81a42,42,0,0,0,9.37,1.21,19.73,19.73,0,0,0,8.89-1.85c10.27-4,15.91-11.32,16.33-21.34a34.05,34.05,0,0,0,3.93.24,19.69,19.69,0,0,0,8.88-1.84c10.7-4.11,16.36-11.91,16.36-22.55C143.78,19.39,140.88,17.11,137.52,14.47Zm-10.7,32.21a17.52,17.52,0,0,1-8.24,1.77,35.63,35.63,0,0,1-5.83-.53c0,.29,0,.6,0,.92,0,9.92-5.08,16.91-15.09,20.78a17.56,17.56,0,0,1-8.25,1.77,44.93,44.93,0,0,1-12-2c-5.53-1.57-9.34-4.3-11.34-8.11a14.43,14.43,0,0,1-1.28-9.19,19.93,19.93,0,0,1-5.8.8,43.38,43.38,0,0,1-11.09-1.7c1.38,1.61,2.19,3.58,2.19,7C50.09,68.13,45,75.12,35,79a17.56,17.56,0,0,1-8.25,1.77,45.06,45.06,0,0,1-12-2C9.2,77.24,5.39,74.51,3.39,70.7a14.51,14.51,0,0,1-1.24-9.44l0-.23a44,44,0,0,1,2.38-8.51,17.17,17.17,0,0,1,1.11-5.66c2.72-7.09,9.51-9.78,14.73-10.79.46-.3,7.57-4.76,13.71,1.23a16.32,16.32,0,0,1,.26-3.86l0-.23A44.54,44.54,0,0,1,36.8,24.7,17.48,17.48,0,0,1,37.92,19C40.64,12,47.42,9.26,52.65,8.25c.5-.33,9.11-5.73,15.57,3.43a35.75,35.75,0,0,0,5.21,6c1.21,1.1,2.35,2,3.35,2.79,2.53,2,4.41,3.47,5.17,6.51l1.14-.24c.4-.26,6-3.73,11.46-.51a37.32,37.32,0,0,1,1.84-6,17.48,17.48,0,0,1,1.12-5.66c2.72-7.09,9.5-9.78,14.73-10.79.5-.33,9.11-5.73,15.57,3.43a35.75,35.75,0,0,0,5.21,6c1.21,1.1,2.34,2,3.35,2.79,3.34,2.62,5.55,4.36,5.55,10C141.92,35.82,136.84,42.81,126.82,46.68Z', fill: '#fff',opacity:'0.8'});
            document.getElementById('test1').appendChild(test2);

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

    

    
});