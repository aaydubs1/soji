"use strict"


/* =======================================================
 * compra.js
 * Interacciones:
 *   - Renderizar carrito completo
 *   - Añadir productos al carrito
 *   - Eliminar productos del carrito
 *   - Actualizar contador del carrito (icono y sección de producto)
 *   - Renderizar carrito en el header
 *   - Inicializar contadores al cargar la página
 * Datos:
 *   - LocalStorage: 'cart' y 'catalog'
 *   - Productos: id, title, price, img, quantity
 * Estructura:
 *   - Constantes (selectores DOM)
 *   - Funciones:
 *       * renderCart()
 *       * updateCartIconCount()
 *       * removeFromCart(id)
 *       * addToCartById(productId)
 *       * updateProductCounter(section, productId)
 *       * renderCartHeader()
 *   - Eventos:
 *       * Botones de productos (+ / −)
 *       * Botones del catálogo (.Shop-button--button)
 *       * Inicialización DOMContentLoaded
 * ======================================================= */


// ===============================
// RENDER CARRITO GRANDE (compra.html)
// ===============================
/**
 * La función `renderCart` muestra los artículos en el carrito de compras, permite eliminar artículos y
 * actualiza la visualización del carrito según corresponda.
 * @returns La función `renderCart` no devuelve nada (`undefined`). Actualiza el contenido del elemento
 * `cartContainer` basándose en los artículos almacenados en el carrito dentro de `localStorage`.  
 * Si el carrito está vacío, muestra un mensaje indicando que el carrito está vacío.  
 * Si hay artículos en el carrito, crea elementos HTML para cada producto en el carrito y los agrega al
 * `cartContainer`.
 */

function renderCart() {
  const cartContainer = document.getElementById('cartContainer');
  if (!cartContainer) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Tu carrito está vacío</p>';
    return;
  }

  cart.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('Cart-item');

    productDiv.innerHTML = `
      <img src="${product.img}" alt="${product.title}" class="Cart-item-img">
      <div class="Cart-item-info">
        <h4 class="Cart-item-title">${product.title}</h4>
        <div class="Cart-item--info-row2">
          <p class="Cart-item-price">${product.price}</p>
          <p class="Cart-item-quantity">${product.quantity}</p>
        </div>
      </div>
      <button class="Cart-remove-button" data-id="${product.id}">Remove</button>
    `;

    cartContainer.appendChild(productDiv);
  });

  const removeButtons = cartContainer.querySelectorAll('.Cart-remove-button');
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id');
      removeFromCart(id);
    });
  });
}

// ===============================
// CONTADOR GLOBAL DEL ICONO DEL CARRITO
// ===============================
/**
 * La función `updateCartIconCount` actualiza el contador que se muestra en el ícono del carrito de compras
 * basándose en los artículos del carrito almacenados en el almacenamiento local.
 * @returns Si el elemento `countSpan` no se encuentra, la función retornará de forma anticipada y no
 * ejecutará el resto del código.
 */

function updateCartIconCount() {
  const countSpan = document.querySelector('.Cart-count'); // 👈 span del icono del carrito
  if (!countSpan) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  countSpan.textContent = total;
}

// ===============================
// ELIMINAR DEL CARRITO (1 unidad)
// ===============================
/**
 * La función `removeFromCart` disminuye la cantidad de un artículo específico en el carrito almacenado en
 * `localStorage` y actualiza la visualización del carrito.
 * @param id - El parámetro `id` en la función `removeFromCart` representa el identificador único
 * del artículo que necesita ser eliminado del carrito.
 */

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart = cart.map(item => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  }).filter(item => item.quantity > 0);

  localStorage.setItem('cart', JSON.stringify(cart));

  renderCart();
  renderCartHeader();
  updateCartIconCount();
}

// ===============================
// CATÁLOGO OFICIAL
// ===============================
/* El fragmento de código que proporcionaste está creando un arreglo llamado `catalog` que contiene objetos
que representan diferentes productos. Cada objeto de producto tiene propiedades como `id`, `title`, `price` e
`img`, las cuales almacenan información sobre el producto, como su identificador, nombre, precio y la fuente
de la imagen. */

const catalog = [
  { id: "001", title: "Gochu flavour", price: "6.99€", img: "assets/gochu-sombra.webp" },
  { id: "002", title: "Sweet Chili & Lime flavour", price: "6.99€", img: "assets/sweet-chili-sombra.webp" },
  { id: "003", title: "White Miso flavour", price: "6.99€", img: "assets/miso-sombra.webp" }
];

localStorage.setItem("catalog", JSON.stringify(catalog));

// ===============================
// AÑADIR AL CARRITO POR ID
// ===============================
/**
 * La función `addToCartById` agrega un producto al carrito almacenado en el almacenamiento local
 * (`localStorage`) basándose en el ID del producto.
 * @param productId - El parámetro `productId` es el identificador único del producto que deseas
 * agregar al carrito.
 * @returns Si el producto con el `productId` especificado se encuentra en el catálogo, la función
 * incrementa la cantidad del producto existente en el carrito o agrega un nuevo producto al carrito
 * con una cantidad de 1. Luego, el carrito actualizado se guarda en `localStorage`.
 */

function addToCartById(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const catalog = JSON.parse(localStorage.getItem('catalog')) || [];

  const productInfo = catalog.find(p => p.id === productId);
  if (!productInfo) return;

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: productInfo.id,
      title: productInfo.title,
      price: productInfo.price,
      img: productInfo.img,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartIconCount();
}

// ===============================
// CONTADOR EN PÁGINA DE PRODUCTO
// ===============================
/**
 * La función `updateProductCounter` actualiza la cantidad mostrada de un producto específico en una
 * sección, basándose en la presencia del producto en el carrito almacenado en el almacenamiento local
 * (`localStorage`).
 * @param section - El parámetro `section` es una referencia al elemento HTML que contiene la
 * información del producto, incluido el elemento contador del producto que debe actualizarse.
 * @param productId - El parámetro `productId` es el identificador único de un producto que deseas
 * actualizar en el contador dentro de una sección específica de la página web.
 * @returns Si no se encuentra un elemento contador dentro de la sección especificada, la función
 * retornará de forma anticipada y no realizará ninguna acción adicional.
 */

function updateProductCounter(section, productId) {
  const counter = section.querySelector('.Product-counter');
  if (!counter) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productInCart = cart.find(item => item.id === productId);

  counter.textContent = productInCart ? productInCart.quantity : 0;
}

// ===============================
// CARRITO DEL HEADER
// ===============================
/**
 * La función `renderCartHeader` renderiza dinámicamente el contenido del carrito de compras en el
 * documento HTML basándose en los artículos almacenados en el almacenamiento local (`localStorage`).
 * @returns La función `renderCartHeader` no devuelve nada (`undefined`) de forma explícita, ya que no
 * tiene una sentencia `return` al final. La función modifica el contenido del elemento `headerList`
 * según los artículos del carrito almacenados en el almacenamiento local.
 */

function renderCartHeader() {
  const headerList = document.getElementById('cartHeaderList');
  if (!headerList) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  headerList.innerHTML = "";

  if (cart.length === 0) {
    headerList.innerHTML = `<li class="Cart-empty">Your cart is empty</li>`;
    return;
  }

  cart.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("Cart-header-item");

    li.innerHTML = `
      <img src="${product.img}" alt="${product.title}" class="Cart-header-img">

      <div class="Cart-header-info">
        <span class="Cart-header-title">${product.title}</span>
        <span class="Cart-header-quantity"> ${product.quantity}</span>
      </div>

      <span class="Cart-header-price">${product.price}</span>

      <button class="Cart-header-remove" data-id="${product.id}">✕</button>
    `;

    headerList.appendChild(li);
  });

  const removeButtons = headerList.querySelectorAll('.Cart-header-remove');
  removeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      removeFromCart(id);
    });
  });
}

// ===============================
// BOTONES PÁGINA DE PRODUCTO (+ y −)
// ===============================
/* Está agregando escuchadores de eventos a los botones con
las clases `.Product-button` y `.Product-remove`. */

const buttonProducts = document.querySelectorAll('.Product-button');
buttonProducts.forEach(button => {
  button.addEventListener('click', () => {
    const section = button.closest('.Product-section');
    if (!section) return;

    const productId = section.dataset.id;

    addToCartById(productId);
    updateProductCounter(section, productId);
    renderCartHeader();
  });
});

const removeButtonsProduct = document.querySelectorAll('.Product-remove');
removeButtonsProduct.forEach(button => {
  button.addEventListener('click', () => {
    const section = button.closest('.Product-section');
    if (!section) return;

    const productId = section.dataset.id;

    removeFromCart(productId);
    updateProductCounter(section, productId);
    renderCartHeader();
  });
});

// ===============================
// BOTONES DESDE INDEX (CATÁLOGO)
// ===============================
/* El fragmento de código que proporcionaste está seleccionando todos los elementos con la clase
`.Shop-button--button` en la página y agregando un escuchador de eventos de clic a cada uno de ellos.
Cuando se hace clic en un botón con esa clase, se realizan las siguientes acciones: */

const buttonsPlus = document.querySelectorAll('.Shop-button--button');
buttonsPlus.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.Shop-article');
    if (!productCard) return;

    const productId = productCard.dataset.id;

    addToCartById(productId);
    renderCartHeader();
  });
});

// ===============================
// INICIALIZAR AL CARGAR
// ===============================
/* El bloque de código `document.addEventListener('DOMContentLoaded', () => { ... })` es un
escuchador de eventos que espera a que el documento HTML se cargue y se analice completamente antes
de ejecutar la función de callback proporcionada. */

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  renderCartHeader();
  updateCartIconCount();

  const sections = document.querySelectorAll('.Product-section');
  sections.forEach(section => {
    const productId = section.dataset.id;
    updateProductCounter(section, productId);
  });
});
