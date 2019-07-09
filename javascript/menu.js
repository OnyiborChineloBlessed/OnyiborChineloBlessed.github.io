'use strict';
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        document.querySelector("#start-menu").style.visibility ="hidden";
    } else {
        document.querySelector("#start-menu").style.visibility ="visible";
    }
}