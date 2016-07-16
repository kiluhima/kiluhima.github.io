//hello
$(window).scroll(function () {
    if (window.pageYOffset > 50) {
        //small scroll bar
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else if (window.pageYOffset > 50 && window.pageYOffset < 100) {

    } else {
        //big scroll bar
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
