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

    $(window).on("scroll", function () {
        var home = $(".home");
        var image1 = $(".image-1");
        var part1 = $(".part-1");
        var image2 = $(".image-2");
        var image3 = $(".image-3");
        var part2 = $(".part-2");
        var image4 = $(".image-4");
        var part3 = $(".part-3");
        var image5 = $(".image-5");
        var image6 = $(".image-6");
        var part4 = $(".part-4");
        var image7 = $(".image-7");
        var part5 = $(".part-5");
        var a = 1;

        var part1Offset = part1.offset().left;
        var image2Offset = image2.offset().left;
        var part3Offset = part3.offset().left;
        var part4Offset = part4.offset().left;

        if ((part1Offset > 900 && part1Offset < 1000)) {
            part1.addClass("animated fadeInUp");
        }
        if ((image2Offset > 900 && image2Offset < 1000)) {
            image2.addClass("animated fadeInRight");
        }
        if ((part3Offset > 900 && part3Offset < 1000)) {
            part3.addClass("animated fadeInUp");
        }
        if ((part4Offset > 900 && part4Offset < 1000)) {
            part4.addClass("animated fadeInUp");
        }
    });

});
