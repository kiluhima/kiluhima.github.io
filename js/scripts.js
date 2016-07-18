//hello

//mobile nav button
$(".button-collapse").sideNav();

//fancy changing scroll navbar
"use strict";

if (window.innerWidth < 992) {
    document.getElementsByClassName("nav-wrapper")[0].style.backgroundColor = "rgba(50,50,50,.75)";
}

function sizing() {
    if (window.innerWidth < 992) {
        document.getElementsByClassName("nav-wrapper")[0].style.backgroundColor = "rgba(50,50,50,.75)";
        document.getElementById("nav-background").style.backgroundColor = "rgba(100,100,100,0)";
    } else if (window.pageYOffset > 50) {
        //small scroll bar
        document.getElementById("nav-background").style.backgroundColor = "rgba(50,50,50,.5)";
        document.getElementsByClassName("nav-wrapper")[0].style.backgroundColor = "rgba(50,50,50,0)";

    } else if (window.pageYOffset === 0) {
        //big scroll bar
        document.getElementById("nav-background").style.backgroundColor = "rgba(100,100,100,0)";
        document.getElementsByClassName("nav-wrapper")[0].style.backgroundColor = "rgba(50,50,50,0)";

    }
}
$(window).scroll(sizing);

$(window).resize(sizing);
