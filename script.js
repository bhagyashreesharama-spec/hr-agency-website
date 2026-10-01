/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        const isOpen = navMenu.classList.contains("show");

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

        menuButton.textContent = isOpen ? "✕" : "☰";

    });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navLinks = document.querySelectorAll(
    ".nav-menu .nav-link, .nav-menu .header-btn"
);

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("show");
        }

        if (menuButton) {

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

});


/* =====================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener("click", function (event) {

    if (!navMenu || !menuButton) {
        return;
    }

    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedMenuButton =
        menuButton.contains(event.target);

    if (
        navMenu.classList.contains("show") &&
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        navMenu.classList.remove("show");

        menuButton.textContent = "☰";

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections = document.querySelectorAll(
    "main section[id]"
);

const navigationLinks = document.querySelectorAll(
    ".nav-menu .nav-link"
);

function updateActiveLink() {

    let currentSection = "home";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (
            target === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveLink
);

window.addEventListener(
    "load",
    updateActiveLink
);


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();

            const phone =
                document
                    .getElementById("phone")
                    .value
                    .trim();

            const service =
                document
                    .getElementById("service")
                    .value;

            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            if (!name || !email || !message) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please fill in your name, email and message.";

                }

                return;

            }


            const subject =
                "New Project Enquiry - " +
                (service || "Website Enquiry");


            const body =
                "Name: " +
                name +
                "\n" +

                "Email: " +
                email +
                "\n" +

                "Phone: " +
                (phone || "Not provided") +
                "\n" +

                "Service: " +
                (service || "Not selected") +
                "\n\n" +

                "Message:\n" +
                message;


            const mailtoLink =
                "mailto:prakharainstitute@gmail.com" +
                "?subject=" +
                encodeURIComponent(subject) +
                "&body=" +
                encodeURIComponent(body);


            if (formMessage) {

                formMessage.textContent =
                    "Opening your email app...";

            }


            window.location.href =
                mailtoLink;

        }
    );

}


/* =====================================================
   CURRENT YEAR
===================================================== */

const footerYear =
    document.querySelector(".footer-bottom p");

if (footerYear) {

    footerYear.innerHTML =
        "© " +
        new Date().getFullYear() +
        " Prakhara Institute. All Rights Reserved.";

}
