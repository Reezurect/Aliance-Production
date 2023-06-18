const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenuToggel = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");
window.addEventListener('scroll', () => {
  if (this.scrollY > 1) {
    navbar.classList.add("navbar-light");
    logo.href.baseVal = "img/sprite.svg#logo";
  } else {
    navbar.classList.remove("navbar-light");
    logo.href.baseVal = "img/sprite.svg#logo-light"
  }
});
mMenuToggel.addEventListener("click", (event) => {
event.preventDefault();
menu.classList.toggle("is-open");
});