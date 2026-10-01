// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
}


// ===============================
// CLOSE MENU AFTER CLICKING LINK
// ===============================

const navLinks = document.querySelectorAll(".nav-menu .nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("show");
        }

    });

});


// ===============================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ===============================

document.addEventListener("click", function (event) {

    if (!navMenu || !menuButton) {
        return;
    }

    if (
        navMenu.classList.contains("show") &&
        !navMenu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        navMenu.classList.remove("show");
    }

});
