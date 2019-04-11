$(function(){
    // var array = ['#about_1', '#about_2', '#about_3', '#about_4'];
    // var height = window.outerHeight;
    // var count = 0;
    // var y = $(window).scrollTop();

    $('#scroll_down').click(function(){
        $('html,body').animate({scrollTop:$('#about_2').offset().top}, 500);
    });
    $('#scroll_top').click(function(){
        $('html,body').animate({scrollTop:$('#about_1').offset().top}, 500);
    });
    
    // $(window).mousewheel(function(e){
    //     console.log(e.deltaY);
        
    //     // scroll down
    //     if(e.deltaY<0){
    //         // count++;
    //         y = y+height
    //         $('html,body').animate({scrollTop:y}, 500);
            
    //         console.log(y);
    //     }else if(e.deltaY>0){
    //         y = y-height
    //         // count--;
    //         $('html,body').animate({scrollTop:y}, 500);
            
    //         console.log(y);
    //     }
    // });

});