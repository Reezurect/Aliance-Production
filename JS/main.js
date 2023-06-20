const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenuToggel = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) => {
    navbar.classList.add("navbar-light");
    logo.href.baseVal = "img/sprite.svg#logo";
};
const lightModeOff = (event) => {
    navbar.classList.remove("navbar-light");
    logo.href.baseVal = "img/sprite.svg#logo-light";
};

const openMenu = (event) => { // функция открывания меню
    menu.classList.add("is-open"); // вешает класс is-open
    mMenuToggel.classList.add("close-menu");
    document.body.style.overflow = "hidden"; // запрещает прокрутку сайта под иеню
    lightModeOn();
};
const closeMenu = (event) => { // функция закрывания меню
    menu.classList.remove("is-open"); // убирает класс is-open
    mMenuToggel.classList.remove("close-menu");
    document.body.style.overflow = ""; // возвращает прокрутку сайта под иеню
    lightModeOff();
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 ? lightModeOn() : lightModeOff(); 
});
mMenuToggel.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});