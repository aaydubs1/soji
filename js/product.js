'use strict'
/* =======================================================
 * products.js
 * Interacciones:
 *   - Clic en subtítulos de productos para abrir/cerrar detalles
 *   - Solo un listado de productos abierto a la vez
 * Datos:
 *   - Elementos del DOM: listas de productos, wrappers/subtítulos
 *   - Estado visual: clase 'display' para mostrar/ocultar detalles
 * Estructura:
 *   - Constantes (selectores DOM)
 *   - Eventos:
 *       * Clic en productSubtitles → Toggle clase 'display' en productList correspondiente
 *       * Cierre de todas las listas antes de abrir una nueva
 *   - Funciones:
 *       * N/A (todo se maneja dentro del listener)
 * ======================================================= */

// Seleccionamos todos los contenedores de lista de productos
const productList = document.querySelectorAll(`.Product-list`);

// Seleccionamos todos los wrappers/subtítulos de productos
const productSubtitles = document.querySelectorAll(`.Product-wrapper`);

// Logs para debug
console.log(productList);
console.log(productSubtitles);

// Iteramos sobre cada subtítulo de producto
productSubtitles.forEach((_, i) => {

  productSubtitles[i].addEventListener('click', () => {

    // Verificamos si la lista correspondiente ya está abierta
    const isOpen = productList[i].classList.contains('display');

    // Cerrar todas las listas primero
    productList.forEach((_, j) => {
      productList[j].classList.remove('display'); // Remueve la clase 'display' de todos
    });

    // Si la lista NO estaba abierta, la abrimos
    if (!isOpen) {
      productList[i].classList.add('display'); // Agrega clase 'display' solo al seleccionado
    }

  });
});
