//hello

//mobile nav button
$(".button-collapse").sideNav();

//fancy changing scroll navbar
$(window).scroll(function () {
    if (window.pageYOffset > 50) {
        //small scroll bar
        document.getElementById("nav-background").style.backgroundColor = "rgba(100,100,100,.5)";

    } else if (window.pageYOffset == 0) {
        //big scroll bar
        document.getElementById("nav-background").style.backgroundColor = "rgba(100,100,100,0)";

    }
});
