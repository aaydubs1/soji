`strict mode`

function renderCart() {
  const cartContainer = document.getElementById('cartContainer');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  cartContainer.innerHTML = ''; // limpiar carrito

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Tu carrito está vacío</p>';
    return;
  }

  cart.forEach(product => {
    if (!product) return; // evita undefined
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

  // **Asignar eventos a los botones después de crear los elementos**
  const removeButtons = cartContainer.querySelectorAll('.Cart-remove-button');
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id');
      removeFromCart(id);
    });
  });
}
function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart = cart.map(item => {
    if (item.id === id) {
      // disminuir cantidad en 1
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  }).filter(item => item.quantity > 0); // eliminar productos con cantidad 0

  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});