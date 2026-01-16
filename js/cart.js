"use strict";

// ===============================
// CATÁLOGO OFICIAL
// ===============================
const catalog = [
  { id: "001", title: "Gochu flavour", price: "6.99€", img: "assets/gochu-sombra.png" },
  { id: "002", title: "Sweet Chili & Lime flavour", price: "6.99€", img: "assets/sweet-chili-sombra.png" },
  { id: "003", title: "White Miso flavour", price: "6.99€", img: "assets/miso-sombra.png" }
];

localStorage.setItem("catalog", JSON.stringify(catalog));


// ===============================
// FUNCIÓN ÚNICA DE CARRITO
// ===============================
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
}


// ===============================
// ACTUALIZAR CONTADOR EN PÁGINA DE PRODUCTO
// ===============================
function updateProductCounter(section, productId) {
  const counter = section.querySelector('.Product-counter');
  if (!counter) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productInCart = cart.find(item => item.id === productId);

  counter.textContent = productInCart ? productInCart.quantity : 0;
}


// ===============================
// RENDER DEL CARRITO DEL HEADER
// ===============================
function renderCartHeader() {
  const headerList = document.getElementById('cartHeaderList');
  if (!headerList) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  headerList.innerHTML = "";

  if (cart.length === 0) {
    headerList.innerHTML = `<li class="Cart-empty">Tu carrito está vacío</li>`;
    return;
  }

  cart.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("Cart-header-item");

    li.innerHTML = `
      <div class="Cart-header-info">
        <span class="Cart-header-title">${product.title}</span>
        <span class="Cart-header-quantity">x${product.quantity}</span>
      </div>
      <span class="Cart-header-price">${product.price}</span>
    `;

    headerList.appendChild(li);
  });
}


// ===============================
// BOTONES DESDE PÁGINA DE PRODUCTO
// ===============================
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


// ===============================
// BOTONES DESDE INDEX (CATÁLOGO)
// ===============================
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
// INICIALIZAR CONTADORES AL CARGAR
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.Product-section');

  sections.forEach(section => {
    const productId = section.dataset.id;
    updateProductCounter(section, productId);
  });

  renderCartHeader();
});
