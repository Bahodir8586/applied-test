var swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});
