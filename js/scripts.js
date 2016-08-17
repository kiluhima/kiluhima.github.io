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
        //if mobile, don't change anything

        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(100,100,100,0)";
    } else if (window.pageYOffset > 50) {
        //small scroll bar
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(50,50,50,.5)";
        document.getElementsByTagName("nav")[0].style.height = "4em";
        document.getElementById("logo").src = "images/Website_Logo_Small.svg";


    } else if (window.pageYOffset === 0) {
        //big scroll bar
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(100,100,100,0)";
        document.getElementsByTagName("nav")[0].style.height = "8em";
        document.getElementById("logo").src = "images/Website_Logo.svg";
    }
}
$(window).scroll(sizing);

$(window).resize(sizing);
