$(document).ready(function () {
    /* anchor click smooth scroll */
    $('a[href^="#"]').click(function () {
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500);
        return false;
    });
    /* top container*/
    $('.container__animate').animate({
        'opacity': 1,
        'padding-top': 234
    }, 'slow');
    // underline grow
    $('.main-title-container span').animate({
        'width': '100%'
    }, 1500);
    // slide header in
    $('header').animate({
        'top': 50
    }, 'slow');
    /* border animate */
    $('#top,#bottom').animate({
        'height': 10
    }, {
        duration: 'slow',
        easing: 'linear',
    });
    $('#left,#right').animate({
        'width': 10
    }, {
        duration: 'slow',
        easing: 'linear',
    });
    /* menu on click */
    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
        $('.ball').toggleClass('active-ball');
        $('body').toggleClass('border-white');
        $('.logo').children().toggleClass('white-logo');
        $('.ball-menu').toggle();
    });
    /* slick slider */
    $('.websites').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        customPaging: function (slider, i) {
            var title = $(slider.$slides[i]).data('title');
            return '<a class="pager__item"> ' + title + ' </a>';
        }
    });
    /* side menu active class */
    $('.sideMenu li a').on('click', function () {
        $('.sideMenu li a').parent().removeClass('active-menu');
        $(this).parent().addClass('active-menu');
    });
    /* load particle JS in */
    particlesJS.load('particles-js', 'assets/js/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
});
