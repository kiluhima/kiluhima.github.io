//hello

//mobile nav button
$('.button-collapse').sideNav({closeOnClick: true});

//fancy changing scroll navbar
"use strict";

function sizing() {
    if (window.innerWidth < 992) {
        //if mobile, don't change anything
        document.getElementsByTagName("nav")[0].style.height = "4em";
        document.getElementsByTagName("nav")[0].style.lineHeight = "4em";
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(50,50,50,.5)";
    } else if (window.pageYOffset > 50) {
        //small scroll bar
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(50,50,50,.5)";
        document.getElementsByTagName("nav")[0].style.height = "4em";
        document.getElementsByTagName("nav")[0].style.lineHeight = "4em";
        document.getElementById("logo").style.height = "3em";
        document.getElementById("big-nav-ul").style.paddingTop = "0em";
        document.getElementById("logo").src = "images/Website_Logo_Small.svg";
    } else if (window.pageYOffset === 0) {
        //big scroll bar
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(100,100,100,0)";
        document.getElementsByTagName("nav")[0].style.height = "10em";
        document.getElementsByTagName("nav")[0].style.lineHeight = "8em";
        document.getElementById("big-nav-ul").style.paddingTop = "2em";
        document.getElementById("logo").style.height = "7em";
        document.getElementById("logo").src = "images/Website_Logo.svg";
    }
}
$(window).scroll(sizing);

$(window).resize(sizing);
