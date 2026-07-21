const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",() =>{
    navLinks.classList.toggle("open");

    const isOpen =navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click",() =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 300,
});

ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
    delay: 600,
});

ScrollReveal().reveal(".movie_info", {
    ...scrollRevealOption,
    origin: "left",
    delay: 900,
});

ScrollReveal().reveal(".header_container .header_btn", {
    ...scrollRevealOption,
    delay: 1200,
});

ScrollReveal().reveal(".socials li", {
    ...scrollRevealOption,
    delay: 500,
    interval: 150,
});