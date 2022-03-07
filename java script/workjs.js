new Swiper('.reviews__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.reviews__btn-next',
      prevEl: '.reviews__btn-prev',
    },
  
  });

/* Tabs */
const portFolioTabsNav = document.querySelector('.media-tab');
const portfolioTabsBtns = document.querySelectorAll('.media-tab__portfolio-item');
const portfolioTabsItems = document.querySelectorAll('.media-tab__portfolio-item');
const portfolioTabsItemsVisible = document.querySelectorAll('.media-tab__item--visible');
const loadMore = document.querySelector('.portfolio-more');

const itsLoadMoreNeeded = (selector) => {
  if (selector.length <= 9) {
  console.log(portfolioTabsItemsVisible.length);
  loadMore.style.display = "none";
  } else {
      loadMore.style.display = "inline-flex";
  }
}

const hideMoreItems = (selector) => {
  if(selector.length > 9){
    const arr = Array.from(selector);
    const hiddenItems = arr.slice(9, selector.length);

    hiddenItems.forEach(el => {
      el.classList.remove('media-tab__item--visible');
      el.classList.remove('media-tab__item--visible-more');
    });
  }
}

portFolioTabsNav.addEventListener("click", function(e){
  const target = e.target;
  if(target.classList.contains('media-tab__link')) {
    console.log('hello')

    const path = target.dataset.path;
    document.querySelectorAll('.media-tab__link').forEach(el => {el.classList.remove('media-tab__link--active')});
    target.classList.add('media-tab__link--active');

    portfolioTabsBtns.forEach(el => {
      el.classList.remove('media-tab__item--visible');
      el.classList.remove('media-tab__item--visible-more');
    });

    document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
      el.closest('.media-tab__portfolio-item').classList.add('media-tab__item--visible'); 
    });

    itsLoadMoreNeeded(document.querySelectorAll(`[data-target="${path}"]`));
    hideMoreItems(document.querySelectorAll('.media-tab__item--visible'));

    if(path == 'all') {

      portfolioTabsBtns.forEach(el => {
        el.classList.add('media-tab__item--visible');
      });

      itsLoadMoreNeeded(document.querySelectorAll('.media-tab__item--visible'));
      hideMoreItems(document.querySelectorAll('.media-tab__item--visible'));
    }
  }
});

hideMoreItems(portfolioTabsItems);
itsLoadMoreNeeded(portfolioTabsItemsVisible);

loadMore.addEventListener('click', function(e) {
  const visibleItems = document.querySelectorAll('media-tab__item--visible'); 



  const path = document.querySelector('.media-tab__link--active').dataset.path;
  if (path == 'all'){
    portfolioTabsItems.forEach(el => {
    el.classList.add('media-tab__item--visible-more'); 
    loadMore.style.display = 'none';
    });
  } else {
      document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
      el.closest('.media-tab__portfolio-item').classList.add('media-tab__item--visible-more'); 
    });
    loadMore.style.display = 'none';
  }
})