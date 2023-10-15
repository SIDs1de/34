const slidersActivate = () => {
  const sectionSlider = new Swiper('.slider-section__swiper', {
    // Свои классы
    wrapperClass: 'slider-section__swiper-wrapper',
    slideClass: 's-slide',

    // Количество слайдов для показа
    slidesPerView: 1,

    // Управление клавиатурой
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    // Отключение функционала
    // при изменении элементов слайдера
    watchOverflow: true,

    speed: 700,

    autoplay: {
      delay: 5000,
    },

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    navigation: {
      nextEl: '.slider-section__swiper-button-next',
      prevEl: '.slider-section__swiper-button-prev',
    },

    grabCursor: true,
  });


  const aboutSlider = new Swiper('.about__swiper', {
    // Свои классы
    wrapperClass: 'about__swiper-wrapper',
    slideClass: 'a-slide',

    spaceBetween: 30,

    // Количество слайдов для показа
    slidesPerView: 1,

    // Управление клавиатурой
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    // Отключение функционала
    // при изменении элементов слайдера
    watchOverflow: true,

    speed: 700,

    autoplay: {
      delay: 5000,
    },

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    navigation: {
      nextEl: '.about__swiper-button-next',
      prevEl: '.about__swiper-button-prev',
    },

    grabCursor: true,
  });
}

export default slidersActivate;