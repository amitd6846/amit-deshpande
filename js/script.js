$(document).ready(function() {
    // $('.more_cat').click(function() {
    //     $('.more_cat_icon').toggleClass('hidden');
    // })
    $('.mega_menu_icon').hover(function() {
        $('.mega_menu').toggleClass('d_none');
        $('.mega_menu').toggleClass('add_show');
    }, function() {
        $('.mega_menu').toggleClass('d_none');
    })
    $('.mega_menu_icon').click(function() {
        $('.mega_menu').addClass('add_show');
    });
    $('.mega_menu').mouseleave(function() {
        $('.mega_menu').removeClass('add_show');
    });
    if ($(window).width() <= 1024) {
        $('.mega_menu_icon').click(function() {
            $('.mega_menu').toggleClass('add_show');
        });
        $('.mega_menu_icon').on("click", function() {
            // alert('hi');
            $('html, body').animate({ scrollTop: $('.mega_menu_icon').position().top }, 'slow');
        });
    } else {
        // alert('More than 1024');
    }
    var get_height = $(window).height();
    $(window).scroll(function() {
        if ($(window).scrollTop() > get_height) {
            $('.bk_tp').addClass('show_btn');
        } else {
            $('.bk_tp').removeClass('show_btn');
        }
    });
    $(".bk_tp").click(function() {
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 1500);
    });
});