import Swiper from 'swiper';
import 'swiper/css';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 4,
    spaceBetween: 45,
    loop: true,
  });
};
