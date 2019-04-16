$(function () {
    var x = 0;
    var y = -90;
    var bgColor = ['#006781', '#4B8D32', '#D6CD25', '#006857', '#ED7235', '#FF947B', '#AF485C', '#F7B42F', '#AE7516', '#C99A6B', '#2E8E89', '#325984']
    var index = 0;
    var animArray = ['jan.json','feb.json','mar.json','apr.json','may.json','jun.json','july.json','aug.json','sep.json','oct.json'];
    var animIndex = 0;
    var hoverIndex = 1;

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
        hoverIndex = i+1; //hover月份資料夾
    }

    //點了島嶼瀏覽的view
    $('._island_intro__btn').click(function () {
        $('.wrapper').removeClass('animsition');
        var anim;
        console.log('animIndex: '+animIndex);
        var animData = {
            container: document.getElementById('bodymovin'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'img/json/' + animArray[animIndex]
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
                
                // mouseX = (e.pageX - (container_wd / 2)) / (container_wd - mover_wd);
                

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
            // setInterval(function(){
            //     var speed= mouseX * 0.03;

            //     result += ((container_wd-mover_wd)-result)*speed;
            //     if(result<0){
            //         result = 0;
            //     }else if(result>mover_wd-container_wd){
            //         result = mover_wd-container_wd;
            //     }
            //     mover.style.transform = "translate3d(" + -Math.round(result) + 'px'+",0px , 0px)";
            // },80);

            function makeSVG(tag, attrs) {
                var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
                for (var k in attrs)
                    el.setAttribute(k, attrs[k]);
                return el;
            }
            // var test1= makeSVG('svg', {id: 'test1', xmlns:'http://www.w3.org/2000/svg',x:-2.4, y:-2.4});
            // document.getElementById('cabbage').appendChild(test1);
            // var test2= makeSVG('path', {id: 'test2', d:'M138.44,14.59c-1-.76-2.07-1.62-3.21-2.66a33.66,33.66,0,0,1-4.87-5.57C126.65,1.1,122.26,0,119.23,0a15,15,0,0,0-7.32,2C97,5.1,94.8,15.72,94.55,20.25c-.39,1-.75,2-1.08,3.16a12.39,12.39,0,0,0-3.39-.47,14.85,14.85,0,0,0-6.18,1.44,17.4,17.4,0,0,0-5.08-5.31c-1-.76-2-1.61-3.18-2.65a33.66,33.66,0,0,1-4.87-5.57c-3.71-5.26-8.1-6.36-11.13-6.36a15,15,0,0,0-7.32,2C37.42,9.59,35.21,20.21,35,24.74a48.52,48.52,0,0,0-2.35,8.6l0,.12a12.18,12.18,0,0,0-5.2-1.14,15.09,15.09,0,0,0-7.31,2C5.18,37.42,3,48,2.72,52.56A47.81,47.81,0,0,0,.37,61.18l0,.18C-.38,65-1.44,77.14,14.63,81.71c1.06.3,2.12.57,3.15.81a42.43,42.43,0,0,0,9.5,1.22,20.23,20.23,0,0,0,9.09-1.88C47.3,77.65,53.09,69.67,53.09,58.78a17.09,17.09,0,0,0-.33-3.51,39.13,39.13,0,0,0,6.75.65,25,25,0,0,0,3.18-.19c.07,5,2.23,13.08,14.62,16.61,1.07.3,2.13.57,3.15.81A42.5,42.5,0,0,0,90,74.37a20.23,20.23,0,0,0,9.09-1.88c10.28-4,16-11.29,16.66-21.24a33.74,33.74,0,0,0,3.4.18,20.15,20.15,0,0,0,9.08-1.88c10.94-4.21,16.72-12.19,16.72-23.08C144.91,19.68,141.77,17.21,138.44,14.59Zm-11,32.66A17.56,17.56,0,0,1,119.14,49a35.52,35.52,0,0,1-5.82-.53c0,.29,0,.6,0,.92,0,9.92-5.08,16.91-15.09,20.78A17.59,17.59,0,0,1,90,72a44.59,44.59,0,0,1-12-2c-5.53-1.57-9.34-4.29-11.34-8.1a14.45,14.45,0,0,1-1.28-9.2,19.61,19.61,0,0,1-5.81.81,43.38,43.38,0,0,1-11.08-1.7c1.38,1.61,2.19,3.58,2.19,7,0,9.92-5.08,16.91-15.09,20.78a17.59,17.59,0,0,1-8.25,1.77,44.6,44.6,0,0,1-12-2C9.77,77.8,6,75.08,4,71.27a14.51,14.51,0,0,1-1.24-9.44l0-.23a44.54,44.54,0,0,1,2.37-8.51,17.38,17.38,0,0,1,1.12-5.66C9,40.34,15.75,37.65,21,36.64c.46-.3,7.57-4.76,13.71,1.23A15.76,15.76,0,0,1,35,34l0-.23a44.54,44.54,0,0,1,2.37-8.51,17.6,17.6,0,0,1,1.11-5.66C41.21,12.52,48,9.83,53.22,8.82c.5-.33,9.11-5.73,15.57,3.43a36.15,36.15,0,0,0,5.21,6h0c1.21,1.1,2.34,2,3.35,2.78,2.53,2,4.41,3.48,5.17,6.52l1.14-.24c.4-.27,6-3.74,11.45-.51a38.48,38.48,0,0,1,1.85-6,17.6,17.6,0,0,1,1.11-5.66c2.72-7.09,9.51-9.79,14.74-10.79.5-.33,9.11-5.73,15.57,3.43a36.15,36.15,0,0,0,5.21,6c1.2,1.1,2.34,2,3.35,2.78,3.34,2.63,5.55,4.36,5.55,10C142.49,36.39,137.4,43.38,127.39,47.25Z', fill: '#fff',opacity:'0.8'});
            // document.getElementById('test1').appendChild(test2);

            // 做hover的圖
            function makeImg(h,x,y,item){
                var img  = document.createElementNS('http://www.w3.org/2000/svg','image');
                img.setAttributeNS(null,'height',h);
                img.setAttributeNS(null,'x',x);
                img.setAttributeNS(null,'y',y);
                img.setAttributeNS('http://www.w3.org/1999/xlink','href','img/island-hover/'+ hoverIndex +'/'+ item +'.svg');
                return img;
            }

            switch(hoverIndex){
                case 1:
                    $('#cabbage').append(makeImg(82,-1.7,-1.8,'cabbage'));
                    $('#botsai').append(makeImg(92,-1.6,-1.6,'botsai'));
                    $('#broccoli').append(makeImg(60,-1.2,-1.2,'broccoli'));
                    $('#uto').append(makeImg(204,-1.4,-1.7,'uto'));
                    $('#tonghau').append(makeImg(61,-1.8,-1.5,'tonghau'));
                    $('#baitsai').append(makeImg(100,-1.5,-1,'baitsai'));
                    $('#pea').append(makeImg(96,-14.7,-1.8,'pea'));
                    $('#orange').append(makeImg(101,-1.3,-1.5,'orange'));
                    $('#strawberry').append(makeImg(79,-1.7,-1.5,'strawberry'));
                    $('#ponkan').append(makeImg(124,-2.2,-1.7,'ponkan'));
                break;
                case 3:
                    $('#cabbage').append(makeImg(63,-2,-1.8,'cabbage'));
                    $('#botsai').append(makeImg(74,-1.7,-1.5,'botsai'));
                    $('#broccoli').append(makeImg(68.7,-2,-1.5,'broccoli'));
                    $('#tonghau').append(makeImg(91,16.8,-1.5,'tonghau'));
                    $('#baitsai').append(makeImg(80,-1.5,-1.5,'baitsai'));
                    $('#pea').append(makeImg(78,19.2,-1.8,'pea'));
                    $('#strawberry').append(makeImg(66,-2,-1.8,'strawberry'));
                    $('#nuipan').append(makeImg(73,4.5,-1.5,'nuipan'));
                    $('#pumpkin').append(makeImg(66,-2,-1.8,'pumpkin'));
                    $('#lusion').append(makeImg(70,2.8,-1.8,'lusion'));
                    $('#melon').append(makeImg(77.7,-2.8,-2,'melon'));
                break
                case 4:
                    $('#tonghau').append(makeImg(77,-1.2,-1.2,'tonghau'));
                    $('#baitsai').append(makeImg(88,-1.6,-1.5,'baitsai'));
                    $('#pea').append(makeImg(114,-2.2,5.5,'pea'));
                    $('#nuipan').append(makeImg(115,23,-1.8,'nuipan'));
                    $('#pumpkin').append(makeImg(73.5,-1.8,-1.8,'pumpkin'));
                    $('#lusion').append(makeImg(70,2.8,-1.8,'lusion'));
                    $('#melon').append(makeImg(96,-1.8,-1.6,'melon'));
                    $('#kongshintsai').append(makeImg(79,-1.2,-1.8,'kongshintsai'));
                    $('#longshutsai').append(makeImg(77.7,-2.8,-2,'longshutsai'));
                    $('#kukua').append(makeImg(119,-1.2,-1.8,'kukua'));
                    $('#watermelon').append(makeImg(84,-2.8,-2,'watermelon'));
                    $('#tauzi').append(makeImg(104,-2,-1.5,'tauzi'));
                break
            }
            




            // 高麗菜點選
            $('#cabbage').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_cabbage,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 花椰菜點選
            $('#broccoli').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_broccoli,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 菠菜點選
            $('#botsai').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_botsai,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 芋頭點選
            $('#uto').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_uto,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 茼蒿點選
            $('#tonghau').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_tonghau,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 大白菜點選
            $('#baitsai').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_baitsai,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 豌⾖點選
            $('#pea').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_pea,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 柳丁點選
            $('#orange').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_orange,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 草莓點選
            $('#strawberry').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_strawberry,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 椪柑點選
            $('#ponkan').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_ponkan,._island_crop").addClass('active');
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
        $("._island_crop__shadow,._island_crop").css("display", "none");
        setTimeout(function(){
            $('html').removeClass('start_anim');
        }, 1000);
        
        setTimeout(function () {
            bodymovin.destroy();
            $('.wrapper').addClass('animsition');
        }, 2000);
    });

    $('.js-crop_close').click(function () {
        $('html').removeClass('popup');
        $(this).parent("._island_crop").removeClass('active');
        setTimeout(function(){
            $('._island_crop__window').removeClass('active');
        },2000);
    });
});