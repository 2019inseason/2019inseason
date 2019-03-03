$(function(){
    
    //island environment background slider  
    var swiper_bg = new Swiper('.swiper-container--bg', {
        loop: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        }
    });

    var x = 0;
    var y = -90;
    $(window).mousewheel(function(e){
        console.log(e.deltaY);
        
        if(e.deltaY == -1){
            x = x+90;
            y = y+90;
            $('._island-intro__row--x').css("transform","rotate("+x+ "deg)");
            $('._island-intro__row--y').css("transform","rotate("+y+ "deg)");
            swiper_bg.slideNext();
        }
        if(e.deltaY == 1){
            x = x-90;
            y = y-90;
            $('._island-intro__row--x').css("transform","rotate("+x+ "deg)");
            $('._island-intro__row--y').css("transform","rotate("+y+ "deg)");
            swiper_bg.slidePrev();
        }
        
    });
});