const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const navLinks = document.querySelectorAll(".navbar-menu a");

// Toggle menu when burger icon is clicked
navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // Remove active class from all links
        navLinks.forEach((item) => {
            item.parentElement.classList.remove("active");
        });

        // Add active class to clicked link's parent li
        link.parentElement.classList.add("active");

        // Close mobile menu
        navbarToggle.classList.remove("active");
        navbarMenu.classList.remove("active");
    });
});

/* ======================================================= */

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    // Change header background on scroll
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
