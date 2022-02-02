// Toggle Nav Menu
const menuBtn = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar-sections");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("clicked");
  navbar.classList.toggle("active-nav");
  if (menuBtn.classList.contains("clicked")) {
    menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    menuBtn.innerHTML = `<i class="fas fa-bars"></i>`;
  }
});

// Show Search Form
const closeSearch = document.querySelector(".close");
const searchIcon = document.querySelector(".search");

// Open Search
searchIcon.addEventListener("click", () => {
  document.querySelector("#search-form").classList.toggle("active");
});
// Close Search
closeSearch.addEventListener("click", () => {
  document.querySelector("#search-form").classList.remove("active");
});
// Activate Swipper Slider
let swiper = new Swiper(".home__slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
