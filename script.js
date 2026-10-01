// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {
    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("show");
}


// ===============================
// CLOSE MENU AFTER CLICKING A LINK
// ===============================

const navLinks = document.querySelectorAll(".navbar .nav-link");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navbar = document.querySelector(".navbar");

        navbar.classList.remove("show");

    });

});


// ===============================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ===============================

document.addEventListener("click", function(event) {

    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-button");

    if (
        navbar.classList.contains("show") &&
        !navbar.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        navbar.classList.remove("show");
    }

});
