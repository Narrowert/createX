const histSlider = new Swiper('.history-slider', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 30,
    navigation: {
      nextEl: '.history__btn-next',
      prevEl: '.history__btn-prev',
    },
  
});

histSlider.on('slideChange', function () {
  console.log(histSlider.realIndex);
  historyBtns.forEach((el, idx) => {
    el.classList.remove('hisoty-nav__btn-active')
  });
  
  document.querySelector(`.hisoty-nav__btn[data-index="${histSlider.realIndex}"]`).classList.add('hisoty-nav__btn-active');
});

const historyBtns = document.querySelectorAll('.hisoty-nav__btn');

historyBtns.forEach((el, idx) => {
  el.setAttribute('data-index', idx);

  el.addEventListener("click", (e) => {
    const index = e.currentTarget.dataset.index;

    historyBtns.forEach((el, idx) => {
      el.classList.remove('hisoty-nav__btn-active')
    });

    e.currentTarget.classList.add('hisoty-nav__btn-active');

    histSlider.slideTo(index);
  }); 
});