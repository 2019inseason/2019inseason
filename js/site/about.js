$(function(){
    $('#scroll_down').click(function(){
        $('html,body').animate({scrollTop:$('#about_2').offset().top}, 500);
    });
    $('#scroll_top').click(function(){
        $('html,body').animate({scrollTop:$('#about_1').offset().top}, 500);
    });
    $(document).on("scroll", function(e){ 
        // console.log(e);
            
    });

});