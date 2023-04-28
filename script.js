// hamburger menu

    $(document).ready(function () {

        $('.fa-bars').click(function () {
            $(this).toggleClass('fa-times');
            $('nav').toggleClass('nav-toggle');
        });

        $(window).on('scroll load', function () {
            $('.fa-bars').removeClass('fa-times');
            $('nav').removeClass('nav-toggle');
        });
    });


    // slider image 

    var swiper = new Swiper(".blogs-slider", {
        loop: true,
        grabCursor: true,
        spaceBetween: 100,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1001: {
                slidesPerView: 4,
            },
            1105: {
                slidesPerView: 5,

            },
        },
    });


     // smooth scrolling 

            $(document).ready(function() {

            $('#menu').click(function() {
                $(this).toggleClass('fa-times');
                $('header').toggleClass('toggle');
            });

            $(window).on('scroll load', function() {

                $('#menu').removeClass('fa-times');
                $('header').removeClass('toggle');

                if ($(window).scrollTop() > 0) {
                    $('.top').show();
                } else {
                    $('.top').hide();
                }

            });

            $('a[href*="#"]').on('click', function(e) {

                e.preventDefault();

                $('html, body').animate({

                        scrollTop: $($(this).attr('href')).offset().top,

                    },
                    500,
                    'linear'
                );

            });
        });

