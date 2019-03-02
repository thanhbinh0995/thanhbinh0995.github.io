$(document).ready(function () {

    $('.email-container input#email').focus(function () {
        $('.email-container input#end-link').addClass('border')
    }).focusout(function(){
        $('.email-container input#end-link').removeClass('border')
    });

});