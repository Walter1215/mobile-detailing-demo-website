
"use strict";

/* =========================================
   Cuadra's Mobile Detailing
   JavaScript
========================================= */

// Automatically update copyright year
const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Get navigation links
const navLinks = document.querySelectorAll(".nav-links a");

// Highlight active navigation link
function updateActiveNavigation() {

    const sections = document.querySelectorAll("main section[id]");

    let currentSection = "home";

    sections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= 160) {
            currentSection = section.id;
        }

    });

    navLinks.forEach((link) => {

        const target = link.getAttribute("href");

        if (target === "#" + currentSection) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }

    });
}

// Update navigation when scrolling
window.addEventListener("scroll", updateActiveNavigation, {
    passive: true
});

// Update navigation when page loads
updateActiveNavigation();
