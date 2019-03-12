// Initialize JS libraries
AOS.init();
particlesJS.load('particles-js', 'assets/js/particles.json');

// Fade in Batman shadow
$('#cover').fadeIn(2000);
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

// Fade in navbar after scrolling past Batman logo
$('.navbar').hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > window.innerHeight / 2) {
        $('.navbar').fadeIn();
    } else {
        $('.navbar').fadeOut();
    }
});

// Fade out form upon click
$("#contactForm").on("click", function () {
    for (i = this.children.length; i >= 0; i -= 1) {
        $(this.children[i]).fadeOut(1000);
    }
    setTimeout(function(){
        $("#contactForm").append("<p>You <i>really</i> thought that would work...?</p>");
    }, 1000);
})
