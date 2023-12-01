const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
    menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

const navbar = document.querySelector(".navbar");

window.addEventListener(".scroll", () => {
    console.log(window.scrollY);
    const windowPosition = window.screenY > 0;
    navBar.classList.toggle("scrolling-active", windowPosition);
})