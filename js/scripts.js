//hello

//mobile nav button
$(".button-collapse").sideNav();

//fancy changing scroll navbar
$(window).scroll(function () {
    if (window.pageYOffset > 50) {
        //small scroll bar
        $("#desktop").top = window.pageYOffset + "px";

    } else if (window.pageYOffset == 0) {
        //big scroll bar


    }
});
