//hello
$(window).scroll(function () {
    if (window.pageYOffset > 50) {
        //small scroll bar
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        //big scroll bar
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
