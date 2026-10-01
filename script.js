// ========================================
// H&R AGENCY WEBSITE - JAVASCRIPT
// ========================================


// ================================
// MOBILE MENU
// ================================

const menuButton = document.querySelector(".menu");

const navigation = document.querySelector(".navigation");


if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("show");

    });

}



// ================================
// CLOSE MOBILE MENU
// AFTER CLICKING A LINK
// ================================

const navigationLinks =
    document.querySelectorAll(".navigation a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navigation) {

            navigation.classList.remove("show");

        }

    });

});



// ================================
// HEADER SCROLL EFFECT
// ================================

const header =
    document.querySelector(".header");


window.addEventListener("scroll", function () {

    if (!header) return;


    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});



// ================================
// CONTACT FORM
// ================================

const contactForm =
    document.querySelector("#contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.querySelector("#name")?.value;


            const email =
                document.querySelector("#email")?.value;


            const message =
                document.querySelector("#message")?.value;


            if (!name || !email || !message) {

                alert(
                    "Please fill all required fields."
                );

                return;

            }


            alert(
                "Thank you " +
                name +
                "! Your message has been received."
            );


            contactForm.reset();

        }
    );

}



// ================================
// BUTTON CLICK EFFECT
// ================================

const buttons =
    document.querySelectorAll(
        ".btn-primary, .btn-outline, .get-started"
    );


buttons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            button.style.transform =
                "scale(0.97)";


            setTimeout(function () {

                button.style.transform =
                    "";

            }, 120);

        }
    );

});



// ================================
// PAGE LOADED
// ================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "H&R Agency website loaded successfully!"
        );

    }
);
