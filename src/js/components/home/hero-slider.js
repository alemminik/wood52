import Swiper from 'swiper';
import 'swiper/css';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      476: {
        spaceBetween: 25,
        centeredSlides: false,
      },
      721: {
        spaceBetween: 35,
      },
      1001: {
        spaceBetween: 45,
      },
    },
  });
};
