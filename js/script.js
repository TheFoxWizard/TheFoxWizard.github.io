$(document).ready(function() {

    $(window).scroll(function() {
        $(".top").css("opacity", 1.1 - $(window).scrollTop() / 250);
    });
    $(window).scroll(function() {
        $("#about").css("opacity",3.7 - $(window).scrollTop() / 320);
    });
});
