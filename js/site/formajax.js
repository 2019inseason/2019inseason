$(function(){
    $('#name,#company,#country,#msg').on('input', function() {
        var input=$(this);
        var val=input.val();
        if(val){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
    $('#email').on('input', function() {
        var input=$(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var val=re.test(input.val());
        if(val){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
    $('#contact__form').submit(function(e) {
        var form_data=$("#contact__form").serializeArray();
        var error_free=true;
        for (var input in form_data){
            var element=$("#"+form_data[input]['name']);
            var valid=element.hasClass("valid");
            var error_element=$("span", element.parent());
            if (!valid){error_element.addClass("show"); error_free=false;}
		    else{error_element.removeClass("show");}
        }
        e.preventDefault();
        if (error_free){
            $('._contact__btn--sending').addClass('active');
            $('body').addClass('sending');
            var form =$(this);

            $.ajax({
                url: "/php/mail.php",
                type: 'POST',
                dataType: 'json',
                cache: false,
                data: form.serialize(),
                success: function(result){
                    console.log(result);
                    $('._contact__btn--sending').removeClass('active');
                    $('body').addClass('submit');

                    setTimeout(function() {
                        $('body').removeClass('submit');
                        $('body').removeClass('sending');
                        $('._contact__input-value').val("");
                    },5000);
                },
                error: function(xhr, resp, text){
                    console.log(xhr, resp, text);
                }
            });
        }
        
    });
});

