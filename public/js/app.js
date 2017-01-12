$(document).ready(function() {
    /*------------------------------*/
    $('.email-form-screen').addClass('hidden');

    $('.contact-one').on('click', function(e) {
        console.log("contact button clicked");
        e.preventDefault();
        // $('.email-form-screen').addClass('animated fadeIn');
        $('.email-form-screen').removeClass('hidden');

    });

    $('.close-email').on('click', function(e) {
        e.preventDefault();
        // $('.email-form-screen').addClass('animated fadeOut');
        $('.email-form-screen').addClass('hidden');
    });
    /*------------------------------*/

    // $('.title').addClass('animated fadeIn');
    // $('.mission').addClass('animated slideInDown');
    // $('.about-craftsman').addClass('animated slideInUp');
    // $('.gallery').addClass('animated slideInRight');

    /*------------------------------*/

    // $('.down-arrow').addClass('animated bounce');

    /*------------------------------*/

    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $(id).offset().top;

        // animated top scrolling
        $('body, html').animate({
            scrollTop: pos
        });
    });

    /*------------------------------*/
    $('.swipebox').swipebox();

    $('.furniture-group').on('click', function(e) {
        e.preventDefault();
        $.swipebox([{
            href: '../assets/furniture/coffee_table_thumb.jpg',
        }, {
            href: '../assets/furniture/cutting_board_thumb.jpg',
        }, {
            href: '../assets/furniture/kitchen_shelves_thumb.jpg',
        }, {
            href: '../assets/furniture/chairs.jpeg',
        }, ]);
    });
    /*------------------------------*/



});
