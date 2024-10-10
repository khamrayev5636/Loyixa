let headerNavshow = document.querySelector(".header__burger");
let headerCloseNav = document.querySelector(".header__close");
let headerHiddin = document.querySelector(".header-hidden");
let overlay = document.querySelector(".overlay");

headerNavshow.addEventListener('click', function () {
  headerHiddin.classList.add('shownav')
  overlay.classList.add('shownav')
})

headerCloseNav.addEventListener('click', function () {
  headerHiddin.classList.remove('shownav')
  overlay.classList.remove('shownav')
})


let swiper = new Swiper(".swiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  freeMode: true,
  loop:true,
  navigation: {
  nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    520: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 3
    },
  }
});