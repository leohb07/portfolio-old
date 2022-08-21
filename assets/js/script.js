const buttonElement = document.querySelector('header .nav-list #btn-mobile');
const navLinks = document.querySelectorAll('.h-list li a');
const logoScrollToTop = document.querySelector('header .nav-list h2');

function toggleMenu() {
  const navList = document.querySelector('header .nav-list');
  navList.classList.toggle('active');  
};

buttonElement.addEventListener('click', toggleMenu);
navLinks.addEventListener('click', toggleMenu);

function scrollToTop() {
  window.scroll(0, 0);
}

logoScrollToTop.addEventListener('click', scrollToTop);