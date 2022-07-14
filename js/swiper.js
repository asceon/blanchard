var slider1 = new Swiper('.slider1', {
  loop: true,
  allowTouchMove: false,
  speed: 5000,
  autoplay: {
    delay: 5000
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

});

var slider2 = new Swiper('.slider2', {
  slidesPerView: 1,
  spaceBetween: 27,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.slider2__next',
    prevEl: '.slider2__prev',
  },

  breakpoints: {
    735: {
      slidesPerView: 2,
      spaceBetween: 37,
    },
    992: {
      slidesPerView: 3,
    },

    1550: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
  },

});


var slider3 = new Swiper('.slider3', {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,

  navigation: {
    nextEl: '.slider3__next',
    prevEl: '.slider3__prev',
  },

  breakpoints: {
    735: {
      slidesPerView: 2,
      spaceBetween: 33,
    },
    992: {
      slidesPerView: 2,
    },

    1550: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
  },
});




