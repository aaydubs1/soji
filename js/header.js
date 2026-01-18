
"strict mode"

/* =======================================================
 * header.js
 * Interacciones:
 *   - Abrir y cerrar menú responsive al hacer clic en hamburguesa
 *   - Cerrar menú al hacer clic en un enlace del menú
 *   - Cerrar menú al hacer clic en el botón "go back"
 * Datos:
 *   - Elementos del DOM: botón de menú, contenedor de navegación, enlaces del menú, botón de retroceso
 *   - Estado visual del menú (abierto/cerrado)
 * Estructura:
 *   - Constantes (selectores DOM)
 *   - Eventos:
 *       * Clic en botón de menú → Toggle clase 'open' en nav
 *       * Clic en enlaces del menú → Remover clase 'open'
 *       * Clic en botón goBack → Remover clase 'open'
 *   - Funciones:
 *       * N/A (todo se maneja dentro de los eventos)
 * ======================================================= */

/* Funcionalidad del menú de navegación responsive (adaptable). */

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


