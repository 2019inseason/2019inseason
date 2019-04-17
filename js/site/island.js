$(function () {
    var x = 0;
    var y = -90;
    var bgColor = ['#006781', '#4B8D32', '#D6CD25', '#006857', '#ED7235', '#FF947B', '#AF485C', '#F7B42F', '#AE7516', '#C99A6B', '#2E8E89', '#325984']
    var index = 0;
    var animArray = ['jan.json','feb.json','mar.json','apr.json','may.json','jun.json','july.json','aug.json','sep.json','oct.json','nov.json','dec.json'];
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
                
                mouseX = (e.pageX - (container_wd / 2)) / (container_wd - mover_wd)/ 5;
                

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
                var speed= mouseX * 0.01;

                result += ((container_wd-mover_wd)-result)*speed;
                if(result<0){
                    result = 0;
                }else if(result>mover_wd-container_wd){
                    result = mover_wd-container_wd;
                }
                mover.style.transform = "translate3d(" + -Math.round(result) + 'px'+",0px , 0px)";
            },10);


            // 做hover的圖
            function makeImg(h,x,y,item){
                var img  = document.createElementNS('http://www.w3.org/2000/svg','image');
                img.setAttributeNS(null,'height',h);
                img.setAttributeNS(null,'x',x);
                img.setAttributeNS(null,'y',y);
                img.setAttributeNS(null,'opacity','0.8');
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
                    $('#pea').append(makeImg(96,14.8,-1.6,'pea'));
                    $('#orange').append(makeImg(123,-1.8,-1.5,'orange'));
                    $('#strawberry').append(makeImg(79,-1.7,-1.5,'strawberry'));
                    $('#ponkan').append(makeImg(102,-1.6,-1.8,'ponkan'));
                break;
                case 2:
                    $('#cabbage').append(makeImg(205,-4,-3.8,'cabbage'));
                    $('#botsai').append(makeImg(85,-1.6,-1.6,'botsai'));
                    $('#broccoli').append(makeImg(277,-5.2,-3.8,'broccoli'));
                    $('#tonghau').append(makeImg(54,-1.8,-1.5,'tonghau'));
                    $('#baitsai').append(makeImg(80,-2.2,-2,'baitsai'));
                    $('#pea').append(makeImg(113,-2,-2,'pea'));
                    $('#strawberry').append(makeImg(79,-1.2,-1.3,'strawberry'));
                    $('#ponkan').append(makeImg(124,-2.2,-2,'ponkan'));
                    $('#nuipan').append(makeImg(305,13.3,-2.2,'nuipan'));
                break;
                case 3:
                    $('#cabbage').append(makeImg(63,-2,-1.8,'cabbage'));
                    $('#botsai').append(makeImg(74,-1.7,-1.5,'botsai'));
                    $('#broccoli').append(makeImg(68.7,-2,-1.5,'broccoli'));
                    $('#tonghau').append(makeImg(90,-0.8,-1,'tonghau'));
                    $('#baitsai').append(makeImg(80,-1.5,-1.5,'baitsai'));
                    $('#pea').append(makeImg(78,19.2,-1.8,'pea'));
                    $('#strawberry').append(makeImg(66,-2,-1.8,'strawberry'));
                    $('#nuipan').append(makeImg(73,4.5,-1.5,'nuipan'));
                    $('#pumpkin').append(makeImg(78,-2,-1.8,'pumpkin'));
                    $('#lusion').append(makeImg(70,2.8,-1.8,'lusion'));
                    $('#melon').append(makeImg(77.7,-2.8,-2,'melon'));
                break
                case 4:
                    $('#tonghau').append(makeImg(77,-1.2,-1.2,'tonghau'));
                    $('#baitsai').append(makeImg(88,-1.6,-1.5,'baitsai'));
                    $('#pea').append(makeImg(114,-2.2,5.5,'pea'));
                    $('#nuipan').append(makeImg(115,23,-1.8,'nuipan'));
                    $('#pumpkin').append(makeImg(73.5,-1.8,-1.8,'pumpkin'));
                    $('#lusion').append(makeImg(73,0.5,-1.8,'lusion'));
                    $('#melon').append(makeImg(96,-1.8,-1.6,'melon'));
                    $('#kongshintsai').append(makeImg(79,-1.2,-1.8,'kongshintsai'));
                    $('#longshutsai').append(makeImg(80,-2.4,-2.4,'longshutsai'));
                    $('#kukua').append(makeImg(119,-1.2,-1.8,'kukua'));
                    $('#watermelon').append(makeImg(84,-2.8,-2,'watermelon'));
                    $('#tauzi').append(makeImg(104,-2,-1.5,'tauzi'));
                break
                case 5:
                    $('#pumpkin').append(makeImg(64.5,-2.4,-1.2,'pumpkin'));
                    $('#lusion').append(makeImg(62,3.7,-1.8,'lusion'));
                    $('#melon').append(makeImg(60,-2,-1.8,'melon'));
                    $('#kongshintsai').append(makeImg(83,-1.2,-1.8,'kongshintsai'));
                    $('#longshutsai').append(makeImg(71,-1.6,-1.6,'longshutsai'));
                    $('#kukua').append(makeImg(117,-1.3,-1.5,'kukua'));
                    $('#watermelon').append(makeImg(86.2,-2.2,-2,'watermelon'));
                    $('#tauzi').append(makeImg(137,-1.6,-1.6,'tauzi'));
                    $('#pear').append(makeImg(104,-1.2,-1,'pear'));
                    $('#liangwu').append(makeImg(110,-2,-1.8,'liangwu'));
                    $('#lizi').append(makeImg(118,-1.8,-2,'lizi'));
                break
                case 6:
                    $('#pumpkin').append(makeImg(115,-1.5,-1.6,'pumpkin'));
                    $('#lusion').append(makeImg(66,2.8,-1.8,'lusion'));
                    $('#melon').append(makeImg(89.5,-1.8,-1.6,'melon'));
                    $('#kongshintsai').append(makeImg(65,-1.4,-1.8,'kongshintsai'));
                    $('#longshutsai').append(makeImg(71,-1.6,-1.6,'longshutsai'));
                    $('#kukua').append(makeImg(128,-1.4,-1.4,'kukua'));
                    $('#watermelon').append(makeImg(98.2,-2,-1.6,'watermelon'));
                    $('#tauzi').append(makeImg(139,-2,-1.8,'tauzi'));
                    $('#pear').append(makeImg(104,-1.2,-1.2,'pear'));
                    $('#liangwu').append(makeImg(104,-1.4,-1.5,'liangwu'));
                    $('#lizi').append(makeImg(110,-1.4,-1.8,'lizi'));
                    $('#grape').append(makeImg(160,-1.3,-1.8,'grape'));
                break
                case 7:
                    $('#pumpkin').append(makeImg(74,-1.5,-1.6,'pumpkin'));
                    $('#melon').append(makeImg(81.5,-2,-1.6,'melon'));
                    $('#kongshintsai').append(makeImg(48,-1.6,-1.8,'kongshintsai'));
                    $('#longshutsai').append(makeImg(84,-1.6,-1.6,'longshutsai'));
                    $('#kukua').append(makeImg(101,-1.4,-1.5,'kukua'));
                    $('#pear').append(makeImg(117.8,-1.8,-1.6,'pear'));
                    $('#liangwu').append(makeImg(85,-1.4,-1.5,'liangwu'));
                    $('#lizi').append(makeImg(97,-1.5,-1.8,'lizi'));
                    $('#grape').append(makeImg(131,-1,-1.5,'grape'));
                    $('#passionfruit').append(makeImg(90,-1.3,-1.8,'passionfruit'));
                    $('#tauzi').append(makeImg(102,-1.2,-1.4,'tauzi'));
                break
                case 8:
                    $('#broccoli').append(makeImg(82.7,-1.6,-1.5,'broccoli'));
                    $('#uto').append(makeImg(221,-1.4,-1.4,'uto'));
                    $('#pumpkin').append(makeImg(100,-1.5,-1.6,'pumpkin'));
                    $('#melon').append(makeImg(66,-2,-1.6,'melon'));
                    $('#kongshintsai').append(makeImg(65,-1.4,-1.8,'kongshintsai'));
                    $('#kukua').append(makeImg(99,-1.8,-1.8,'kukua'));
                    $('#tauzi').append(makeImg(120,-1.8,-2.2,'tauzi'));
                    $('#pear').append(makeImg(120,-1.2,-1.2,'pear'));
                    $('#lizi').append(makeImg(102,-1.7,-2,'lizi'));
                    $('#grape').append(makeImg(90,-1.3,-1.6,'grape'));
                    $('#passionfruit').append(makeImg(98,-1.3,-1.8,'passionfruit'));
                    $('#liango').append(makeImg(380,-5,-3.5,'liango'));
                break
                case 9:
                    $('#broccoli').append(makeImg(68,-2,-1.5,'broccoli'));
                    $('#uto').append(makeImg(140,-1.6,-1.4,'uto'));
                    $('#ponkan').append(makeImg(106,-1.6,-1.8,'ponkan'));
                    $('#pumpkin').append(makeImg(87,-1.8,-1.6,'pumpkin'));
                    $('#melon').append(makeImg(70.5,-2,-1.2,'melon'));
                    $('#kongshintsai').append(makeImg(54,-1.4,-1.6,'kongshintsai'));
                    $('#kukua').append(makeImg(115,-1.4,-1.6,'kukua'));
                    $('#pear').append(makeImg(102,-1,-1.4,'pear'));
                    $('#passionfruit').append(makeImg(97,-1.6,-1.6,'passionfruit'));
                    $('#liango').append(makeImg(118,17.9,-1.6,'liango'));
                    $('#papaya').append(makeImg(213,-1.1,-1.4,'papaya'));
                break
                case 10:
                    $('#broccoli').append(makeImg(115,-1.6,-2,'broccoli'));
                    $('#uto').append(makeImg(167,-1.6,-1.7,'uto'));
                    $('#tonghau').append(makeImg(137,-1.6,-1.3,'tonghau'));
                    $('#ponkan').append(makeImg(105,-2,-1.8,'ponkan'));
                    $('#pumpkin').append(makeImg(81,-1.3,-1.4,'pumpkin'));
                    $('#melon').append(makeImg(84.5,-2.2,-2,'melon'));
                    $('#grape').append(makeImg(121,-5.6,-2,'grape'));
                    $('#liango').append(makeImg(105,-1.3,-1.8,'liango'));
                    $('#papaya').append(makeImg(205,-1.7,-1.9,'papaya'));
                    $('#shizi').append(makeImg(91,-1.5,-1.5,'shizi'));
                    $('#whitelobo').append(makeImg(97,4.3,-1.8,'whitelobo'));
                break
                case 11:
                    $('#cabbage').append(makeImg(66,-1.7,-1.8,'cabbage'));
                    $('#botsai').append(makeImg(76,-1.8,-1.6,'botsai'));
                    $('#broccoli').append(makeImg(45,-1.4,-1.4,'broccoli'));
                    $('#uto').append(makeImg(161,-1.4,-1.3,'uto'));
                    $('#tonghau').append(makeImg(56,-1.8,-1.5,'tonghau'));
                    $('#baitsai').append(makeImg(89,-1.5,-1.5,'baitsai'));
                    $('#pea').append(makeImg(81,12.4,-1.2,'pea'));
                    $('#orange').append(makeImg(102,-1.2,-1,'orange'));
                    $('#ponkan').append(makeImg(111,-1.8,-1.8,'ponkan'));
                    $('#melon').append(makeImg(69,-1.6,-1.6,'melon'));
                    $('#grape').append(makeImg(127,-1.3,-1.4,'grape'));
                    $('#shizi').append(makeImg(113,-1.8,-1.8,'shizi'));
                    $('#whitelobo').append(makeImg(131,-1.8,-1.5,'whitelobo'));
                break
                // case 12:
                //     $('#cabbage').append(makeImg(66,-1.7,-1.8,'cabbage'));
                //     $('#botsai').append(makeImg(76,-1.8,-1.6,'botsai'));
                //     $('#broccoli').append(makeImg(45,-1.4,-1.4,'broccoli'));
                //     $('#uto').append(makeImg(161,-1.4,-1.3,'uto'));
                //     $('#tonghau').append(makeImg(56,-1.8,-1.5,'tonghau'));
                //     $('#baitsai').append(makeImg(89,-1.5,-1.5,'baitsai'));
                //     $('#pea').append(makeImg(81,12.4,-1.2,'pea'));
                //     $('#orange').append(makeImg(102,-1.2,-1,'orange'));
                //     $('#strawberry').append(makeImg(79,-1.7,-1.5,'strawberry'));
                //     $('#ponkan').append(makeImg(111,-1.8,-1.8,'ponkan'));
                //     $('#grape').append(makeImg(127,-1.3,-1.4,'grape'));
                //     $('#shizi').append(makeImg(113,-1.8,-1.8,'shizi'));
                //     $('#whitelobo').append(makeImg(131,-1.8,-1.5,'whitelobo'));
                // break
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
            // 牛蒡點選
            $('#nuipan').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_nuipan,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 南瓜點選
            $('#pumpkin').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_pumpkin,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 蘆筍點選
            $('#lusion').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_lusion,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 香瓜點選
            $('#melon').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_melon,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 空心菜點選
            $('#kongshintsai').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_kongshintsai,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 龍鬚菜點選
            $('#longshutsai').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_longshutsai,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 苦瓜點選
            $('#kukua').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_kukua,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 西瓜點選
            $('#watermelon').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_watermelon,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 桃⼦點選
            $('#tauzi').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_tauzi,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 梨⼦點選
            $('#pear').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_pear,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 蓮霧點選
            $('#liangwu').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_liangwu,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 李⼦點選
            $('#lizi').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_lizi,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 葡萄點選
            $('#grape').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_grape,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 百香果點選
            $('#passionfruit').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_passionfruit,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 蓮藕點選
            $('#liango').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_liango,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // ⽊瓜點選
            $('#papaya').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_papaya,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 柿⼦點選
            $('#shizi').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_shizi,._island_crop").addClass('active');
                    $('html').addClass('popup');
                }, 1000);
            });
            // 白蘿蔔點選
            $('#whitelobo').click(function () {
                $("._island_crop__shadow,._island_crop").css("display", "block");
                setTimeout(function () {
                    $("#js_whitelobo,._island_crop").addClass('active');
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