const navbar = document.querySelector(".navbar");
const logoLight = document.querySelector(".logo-light");
const logo = document.querySelector(".logo");
const mMenuToggel = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) => {
    navbar.classList.add("navbar-light");
    logo.style.display = "block";
    logoLight.style.display = "none";
};
const lightModeOff = (event) => {
    navbar.classList.remove("navbar-light");
    logo.style.display = "none";
    logoLight.style.display = "block";
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

const swiperSteps = new Swiper(".steps-slider", {
  speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: '.steps-button-next',
    prevEl: '.steps-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
    },
  },
});

const swiper = new Swiper('.features-slider', {
  speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 5,
    },
  },
});

const swiperBlog = new Swiper(".blog-slider", {
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.blog-button-next',
    prevEl: '.blog-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
  },
});