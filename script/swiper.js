'use strtict';
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 700,
    autoplay: {
          delay: 5000,
    },
    effect: 'coverflow',
    coverflowEffect: {
          rotate: 30,
          slideShadows: false,
    },
    spaceBetween: 200,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });