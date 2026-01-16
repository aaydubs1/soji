"use strict";

// ===============================
// RENDER CARRITO GRANDE (compra.html)
// ===============================
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
          <p class="Cart-item-quantity">Cantidad: ${product.quantity}</p>
        </div>
      </div>
      <button class="Cart-remove-button" data-id="${product.id}">Eliminar</button>
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
const catalog = [
  { id: "001", title: "Gochu flavour", price: "6.99€", img: "assets/gochu-sombra.png" },
  { id: "002", title: "Sweet Chili & Lime flavour", price: "6.99€", img: "assets/sweet-chili-sombra.png" },
  { id: "003", title: "White Miso flavour", price: "6.99€", img: "assets/miso-sombra.png" }
];

localStorage.setItem("catalog", JSON.stringify(catalog));

// ===============================
// AÑADIR AL CARRITO POR ID
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
  updateCartIconCount();
}

// ===============================
// CONTADOR EN PÁGINA DE PRODUCTO
// ===============================
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
      <img src="${product.img}" alt="${product.title}" class="Cart-header-img">

      <div class="Cart-header-info">
        <span class="Cart-header-title">${product.title}</span>
        <span class="Cart-header-quantity">Cantidad: ${product.quantity}</span>
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
