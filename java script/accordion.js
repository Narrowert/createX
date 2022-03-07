new Swiper('.slider-related-projects__items', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.related-projects__btn-next',
      prevEl: '.related-projects__btn-prev',
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

/* Spoilers */
$("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('collapse');

        
        $(this).toggleClass("active");
        
});


