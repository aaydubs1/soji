'use strict'
/* =======================================================
 * index.js
 * Interacciones:
 *   - Abrir y cerrar carrito desde icono y botones "+"
 *   - Mostrar respuestas de preguntas frecuentes (FAQ)
 *   - Efecto hover sobre cards de recetas
 *   - Carrusel de historias
 * Datos:
 *   - Productos del catálogo (DOM)
 *   - Estado visual de cards y carrusel
 * Estructura:
 *   - Constantes (selectores DOM)
 *   - Eventos:
 *       * Abrir/Cerrar carrito
 *       * Añadir al carrito desde botones
 *       * FAQ (click en preguntas)
 *       * Hover en cards
 *       * Auto-movimiento del carrusel
 *   - Funciones:
 *       * autoMove() → Carrusel automático
 * ======================================================= */

// -----------------------------
// Añadir producto al carrito
// -----------------------------

// Seleccionamos el botón de cerrar carrito
const cartClose = document.querySelector('.Cart-close')

// Seleccionamos el menú del carrito
const cartMenu = document.querySelector('.Shop-cart')

// Seleccionamos el ícono del carrito en el header
const cartIcon = document.querySelector('.Header-cart-button')

// Seleccionamos todos los botones "añadir al carrito" de los productos
const plusIcon = document.querySelectorAll(`.Shop-button--button`)

// Al hacer clic en el ícono del carrito, mostramos el menú del carrito
cartIcon.addEventListener(`click`, () => {
    cartMenu.classList.add(`visible`)
})

// Al hacer clic en el botón de cerrar, ocultamos el menú del carrito
cartClose.addEventListener(`click`, () => {
    cartMenu.classList.remove(`visible`)
})

// Al hacer clic en cualquier botón "añadir al carrito", mostramos el carrito
plusIcon.forEach((_, i) => {
    plusIcon[i].addEventListener(`click`, () => {
        cartMenu.classList.add(`visible`)
    })
})


// -----------------------------
// Preguntas frecuentes (FAQ)
// -----------------------------

// Seleccionamos todas las respuestas
const answer = document.querySelectorAll(`.Faq-question--answer`)

// Seleccionamos todas las preguntas
const question = document.querySelectorAll(`.Faq-question--title`)

// Al hacer clic en una pregunta, mostramos su respuesta y ocultamos las demás
question.forEach((_, i) => {
    question[i].addEventListener(`click`, () => {
        // Ocultar todas las respuestas
        answer.forEach((_, i) => {
            answer[i].classList.remove(`show`)
        })
        // Mostrar la respuesta correspondiente a la pregunta clickeada
        answer[i].classList.add(`show`)
    })
})


// -----------------------------
// Efecto hover sobre cards (añadir al carrito)
// -----------------------------

// Seleccionamos todas las cards
const cards = document.querySelectorAll('.Recepies-column');

// Seleccionamos imágenes y textos dentro de las cards (opcional, no se usan aquí)
const cardImg = document.querySelectorAll(`.Recepies-img--img`)
const cardText = document.querySelectorAll(`.Recepies-text`)

// Al pasar el mouse sobre una card, se agrega clase 'show'
// Al quitar el mouse, se remueve la clase 'show'
cards.forEach((_, i) => {
    cards[i].addEventListener('mouseover', () => {
        cards[i].classList.add('show');
    });

    cards[i].addEventListener('mouseout', () => {
        cards[i].classList.remove('show');
    });
});


// -----------------------------
// Carrusel de story
// -----------------------------

// Seleccionamos todas las imágenes del carrusel
const carruselImgs = document.querySelectorAll(`.Carrousel-img`)
console.log(carruselImgs)

// Seleccionamos el contenedor del carrusel
const carruselWrapper = document.querySelector(`.Carrousel-wrapper`)
console.log(carruselWrapper)

// Contador para la imagen actual
let counter = 0

// Número total de imágenes
let numImage
numImage = carruselImgs.length 
console.log(numImage)

// Ajustamos el ancho del wrapper según el número de imágenes
carruselWrapper.style.width = `${100 * numImage}%`

// Configuramos columnas en grid para alinear las imágenes horizontalmente
carruselWrapper.style.gridTemplateColumns = `repeat(${numImage}, 1fr)`

// Función para mover automáticamente el carrusel
function autoMove() {
    counter++; // Avanzamos a la siguiente imagen

    // Si llegamos al final, volvemos a la primera imagen
    if (counter >= numImage) {
        counter = 0;
    }

    // Movemos el wrapper usando translate (porcentaje según la imagen)
    carruselWrapper.style.translate = `-${(100 / numImage) * counter}%`;
}

// Ejecutamos autoMove cada 4 segundos (4000 ms)
setInterval(autoMove, 4000);
