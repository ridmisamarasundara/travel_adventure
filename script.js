/*
// Toggle menu for mobile
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  toggle.classList.toggle('active');
});

// Toggle search bar
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
searchIcon.addEventListener('click', (e) => {
  e.preventDefault();
  searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
});

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
*/

var swiper = new Swiper(".home-slider", {
      loop:true,
      grabCursor:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
