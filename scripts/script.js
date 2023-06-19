
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

const navbar = document.querySelector('.header')
window.addEventListener('scroll',()=>{
  if (window.scrollY > 0) {
    navbar.classList.add("header--scroll");
  } else {
    navbar.classList.remove("header--scroll");
  }
})