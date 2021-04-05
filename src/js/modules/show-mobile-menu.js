const showMobileMenu = () => {
  const mobileMenu = document.querySelector('.header__mobile-menu');
  const mobileBtn = document.querySelector('.header__button');
  const buttonLines = document.querySelectorAll('.header__button-line');

  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('header__mobile-menu_active');
    buttonLines.forEach(line => {
      line.classList.toggle('header__button-line_active');
    });
    document.body.classList.toggle('scroll-hidden');
  });
};

export default showMobileMenu;
