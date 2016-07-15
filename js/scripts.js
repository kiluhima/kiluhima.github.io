//hello
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
        triggerElement: "#intro-banner",
        duration: 300
    })
    .setTween("#animate1", 0.5, {
        backgroundColor: "green",
        scale: 2.5
    }) // trigger a TweenMax.to tween
    .addIndicators({
        name: "1 (duration: 0)"
    }) // add indicators (requires plugin)
    .addTo(controller);

$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
