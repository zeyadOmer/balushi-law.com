(function ($) {
    "use strict";

    /*====  Document Ready Function =====*/
    jQuery(document).ready(function($){

        //Grid Post Masonry
        $('.all-posts-wrapper').imagesLoaded( function() {
            $('.all-posts-wrapper').masonry({
                itemSelector: '.single-post-item',
                percentPosition: true,
            });
        });

        // Gallery Post Slider
        $('.post-gallery-slider').slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1500,
            dots: false,
            arrows: true,
            prevArrow: '<i class="slick-arrow slick-prev fas fa-arrow-left"></i>',
            nextArrow: '<i class="slick-arrow slick-next fas fa-arrow-right"></i>',
        });


        // Scroll Top
        $(window).on("scroll",function(){
            var pagescroll = $(window).scrollTop();
            if(pagescroll > 100){
                $(".scroll-to-top").addClass("scroll-to-top-visible");

            }else{
                $(".scroll-to-top").removeClass("scroll-to-top-visible");
            }
        });

        $(".scroll-to-top").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });


        // Popup Video
        $(".td_video_button").magnificPopup({
            type: 'video'
        });

        // Popup Image
        $('.td-popup-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        // Counter Up
        $(".td-count-number").counterUp({
            delay: 10,
            time: 2000
        });

        //Mobile Menu
        $("#main-menu").slicknav({
            allowParentLinks: true,
            prependTo: '#mobile-menu-wrap',
            label: 'Menu',
        });


        $(".mobile-menu-trigger").on("click", function(e) {
            $(".mobile-menu-container").addClass("menu-open");
            e.stopPropagation();
        });

        $(".mobile-menu-close").on("click", function(e) {
            $(".mobile-menu-container").removeClass("menu-open");
            e.stopPropagation();
        });


        $(".side-menu-trigger").on("click", function(e) {
            $("body").addClass("offcanvas-menu-open");
            e.stopPropagation();
        });

        $(".offcanvas-close").on("click", function(e) {
            $("body").removeClass("offcanvas-menu-open");
            e.stopPropagation();
        });


        $(".skillbar").each(function() {
            $(this).appear(function() {
                $(this).find(".count-bar").animate({
                    width:$(this).attr("data-percent")
                },3000);
            });
        });

        $(".skill-percent-count").counterUp({
            delay: 10,
            time: 3000
        });
    });

    /*====  Window Load Function =====*/
    jQuery(window).on('load', function() {
        //Preloader
        $('.preloader-wrapper').delay(1000).fadeOut('slow');
        setTimeout(function() {
            $('.site').addClass('loaded');
        }, 500);

    });

    // Post Print
    $(document).on('click', '.print-button', function(e){
        console.log();
        e.preventDefault();
        window.print();
        return false;
    });

}(jQuery));
