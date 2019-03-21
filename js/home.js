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

    $(window).on("scroll", function() {
        var scrollHeight = $(document).height();
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        var home = $(".home").css("left");
        var image1 = $(".image-1").css("left");
        var part1 = $(".part-1").css("left");
        var image2 = $(".image-2").css("left");
        var image3 = $(".image-3").css("left");
        var part2 = $(".part-2").css("left");
        var image4 = $(".image-4").css("left");
        var part3 = $(".part-3").css("left");
        var image5 = $(".image-5").css("left");
        var image6 = $(".image-6").css("left");
        var part4 = $(".part-4").css("left");
        var image7 = $(".image-7").css("left");
        var part5 = $(".part-5").css("left");
        var a = 1;
        if (scrollTop <= 150 && scrollTop >= 0) {
            $(".home").addClass("animation").css("top", "41.5%")
        } else {
            $(".home").removeClass("wow bounceInDown")
        }

        if (scrollTop <= 2000 && scrollTop >= 1850) {
            $(".image-3").addClass("animation").css("top", "17%")
        } else {
            $(".image-3").removeClass("animation")
        }
    });

});