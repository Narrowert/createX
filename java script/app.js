let heroSwaper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  loop: false,
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },
  pagination: {
    el: '.hero__pag',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 1000,
  },
  speed: 1000,
});

let portfolioSlider = new Swiper('.slider-portfolio__items', {
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

let mySwaper = new Swiper('.reviews__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.reviews__btn-next',
      prevEl: '.reviews__btn-prev',
    },
  
  });


/* Video */
const videoBlock = document.querySelector('.video-block');
const video = videoBlock.querySelector('video');
const playBtn = videoBlock.querySelector('.video-block__play');

playBtn.addEventListener("click", function(){
  console.log("hello");
  videoBlock.classList.add('video-block--played');
  video.play();
  video.controls = true;
  playBtn.classList.add('video-block__play--played')
})

video.onpause = function() {
    console.log("hellafafafo");
    videoBlock.classList.remove('video-block--played');
    video.controls = false;
    playBtn.classList.remove('video-block__play--played');
}


