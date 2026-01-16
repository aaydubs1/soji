"strict mode"

const headerMenu = document.querySelector('.Header-menu');
const headerNav = document.querySelector('.Header-nav');
const headerTitles = document.querySelectorAll('.Header-li');
const goBack = document.querySelector('.Header-back');

// Toggle menú al hacer click en la hamburguesa
headerMenu.addEventListener('click', () => {
  headerNav.classList.toggle('open'); // clase que activa transform: scaleY(1)
});

// Cuando se hace click en un headertitles, cerramos menú
headerTitles.forEach((_,i) => {
  headerTitles[i].addEventListener('click', () => {
    headerNav.classList.remove('open');
  });
});

// Cuando se hace click en goBack, cerramos menú
goBack.addEventListener('click', () => {
  headerNav.classList.remove('open');
});