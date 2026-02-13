import Swiper from 'swiper';
import 'swiper/css';

export const useHeroListSlider = () => {
  new Swiper('.hero__list-slider', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 35,
    breakpoints: {
      701: {
        spaceBetween: 55,
      },
    },
  });
};
