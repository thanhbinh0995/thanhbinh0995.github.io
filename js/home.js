$(document).ready(function () {

    $('.email-container input#email').focus(function () {
        $('.email-container input#end-link').addClass('border')
    }).focusout(function () {
        $('.email-container input#end-link').removeClass('border')
    });

    function closeNav() {
        $(".navbar-collapse").stop().animate({'height': '100px'}, 300, function () {
            $('.navbar-collapse').removeClass('in').addClass("collapse");
        });
        $(".navbar-toggle").stop().removeClass('in').addClass('collapsed');

    }

    function openNav() {
        $(".navbar-collapse").stop().animate({'height': '300px'}, 300, function () {
            $('.navbar-collapse').removeClass("collapse").addClass('in');
        });
        $(".navbar-toggle").stop().removeClass('collapsed').addClass('in');
    }

    $('.navbar-collapse').click(function (event) {
        var isOpen = $(this).hasClass("navbar-collapse in");
        if (isOpen === true) {
            closeNav();
        } else {
            openNav();
        }
    });

});