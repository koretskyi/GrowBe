const swiper = new Swiper(".swiper-clients", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  slidesOffsetBefore: 300,
  slidesOffsetAfter: 300,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

const swiperNews = new Swiper(".swiper-news", {
  slidesPerView: 2,
  slidesOffsetBefore: 370,
  slidesOffsetAfter: 370,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
