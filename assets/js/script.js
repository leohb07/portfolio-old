const buttonElement = document.querySelector('header .nav-list #btn-mobile');

function toggleMenu() {
  const navList = document.querySelector('header .nav-list');
  navList.classList.toggle('active');
};

buttonElement.addEventListener('click', toggleMenu);