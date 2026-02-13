import Swiper from 'swiper';
import 'swiper/css';

export const useHeroListSlider = () => {
  new Swiper('.hero__list-slider', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 55,
  });
};
