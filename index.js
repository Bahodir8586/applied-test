var swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});
