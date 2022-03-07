new Swiper('.slider-portfolio__items', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.portfolio__btn-next',
      prevEl: '.portfolio__btn-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    }
  
});

const workSwiper = new Swiper('.work-images__nav', {
    spaceBetween: 20,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      576: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 10,
      },
    }
  });

const workSwiperNav = new Swiper(".work-images__slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".work__btn-next",
      prevEl: ".work__btn-prev",
    },
    thumbs: {
      swiper: workSwiper,
    },

});