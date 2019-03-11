// Initialize JS libraries
AOS.init();
particlesJS.load('particles-js', 'assets/js/particles.json');

// Fade in batman shadow
$('#cover').fadeIn(2000);
$("#particles-js").css('opacity', 1);
$('#cover .active').delay(2000).fadeOut(2000);
$("#down-arrow").delay(2000).fadeIn(2000);

// Enable smooth scrolling for links
$('a[href*="#"]').click(function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.navbar').fadeIn();
    } else {
        $('.navbar').fadeOut();
    }
});

$('body').scrollspy({
    target: '#mainNav',
    offset: 57
});
