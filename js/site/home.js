$(function(){

    // var scene1 = document.getElementById('homeScene');
    // var parallaxInstance = new Parallax(scene1, {
    //     // relativeInput: true,
    //     clipRelativeInput: true,
    //     // hoverOnly: true,
    //     // originX:0,
    //     // limitY:0,
    //     // limitX: $("#bodymovin svg").width()-$(window).width(),
    //     // frictionX: 0.5,
    //     // frictionY: 0.5
        
    // });  
    
    $('._home_island__img--island1').mouseover(function(){
        $("._home__title").removeClass('active');
        $("._home_island__img--island1,._home__title--1").addClass('active');
        $("._home_island__img--island2,._home_island__img--island3,._home_island__img--island4").removeClass('active');
    });
    $('._home_island__img--island2').mouseover(function(){
        $("._home__title").removeClass('active');
        $("._home_island__img--island2,._home__title--2").addClass('active');
        $("._home_island__img--island1,._home_island__img--island3,._home_island__img--island4").removeClass('active');
    });
    $('._home_island__img--island3').mouseover(function(){
        $("._home__title").removeClass('active');
        $("._home_island__img--island3,._home__title--3").addClass('active');
        $("._home_island__img--island1,._home_island__img--island2,._home_island__img--island4").removeClass('active');
    });
    $('._home_island__img--island4').mouseover(function(){
        $("._home__title").removeClass('active');
        $("._home_island__img--island4,._home__title--4").addClass('active');
        $("._home_island__img--island2,._home_island__img--island3,._home_island__img--island1").removeClass('active');
    });
    $("._home_island__img--island1,._home_island__img--island2,._home_island__img--island3,._home_island__img--island4").mouseleave(function(){
        $("._home__title").removeClass('active');
        $("._home_island__img--island1,._home_island__img--island2,._home_island__img--island3,._home_island__img--island4").addClass('active');
    });
});