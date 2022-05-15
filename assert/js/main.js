$(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
        $('.back-to-top').show();
    } else {
        $('.back-to-top').hide();
    }
})
$('.back-to-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false
});