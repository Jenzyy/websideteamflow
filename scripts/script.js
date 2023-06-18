
const btnClose = document.querySelector('.nav__close');
const btnMenu = document.querySelector('.nav__menu-icon');
btnMenu.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);

function toggleMenu() {
  const navMenu = document.querySelector('.nav__menu');
  if (navMenu.classList.contains('open--menu')) {
    navMenu.classList.remove('open--menu');
    return
  }
  navMenu.classList.add('open--menu');
}
