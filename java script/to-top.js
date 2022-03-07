/* To top */
const scroll = new SmoothScroll('.to-top');
const toTop = document.querySelector('.to-top');
let heroHeight = document.querySelector('.to-top__view').offsetHeight; 

const isVisibleToTop = (y = 0) => {
  if(y >= heroHeight){
    toTop.classList.add('to-top--active');
  } else {
    toTop.classList.remove('to-top--active');
  }
};

isVisibleToTop(window.scrollY);

window.addEventListener("scroll", function(){
  let y = window.scrollY;

  isVisibleToTop(y);
})