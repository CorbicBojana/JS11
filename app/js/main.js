var button = document.getElementById("nav_button");
var buttonOpen = document.getElementById("nav_button_open");
var buttonClose = document.getElementById("nav_button_close");
var nav = document.getElementById("nav");

var showNav = false;

button.addEventListener("click", function() {

    if (showNav === false) {
        buttonOpen.style.display = "none";
        buttonClose.style.display = "inline-block";
        nav.style.display = "block";

        showNav = true;
    } else {
        buttonOpen.style.display = "inline-block";
        buttonClose.style.display = "none";
        nav.style.display = "none";

        showNav = false;
    }
})