export const useBurger = () => {
  const burgerBtn = document.querySelector('.burger');
  const overlay = document.querySelector('.overlay');
  const burgerMenu = document.querySelector('.header__nav');

  const closeBurgerMenu = () => {
    burgerBtn.classList.remove('burger--active');
    overlay.classList.remove('overlay--visible');
    burgerMenu.classList.remove('header__nav--visible');
    document.body.classList.remove('body--fixed');
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    overlay.classList.toggle('overlay--visible');
    burgerMenu.classList.toggle('header__nav--visible');
    document.body.classList.toggle('body--fixed');
  });

  document.addEventListener('keydown', (e) => {
    if (
      (e.key === 'Escape') &
      burgerMenu.classList.contains('header__nav--visible')
    ) {
      burgerBtn.classList.remove('burger--active');
      overlay.classList.remove('overlay--visible');
      burgerMenu.classList.remove('header__nav--visible');
      document.body.classList.remove('body--fixed');
    }
  });

  overlay.addEventListener('click', closeBurgerMenu);
};
