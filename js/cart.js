'strict mode'

// ===============================
// 1. CATÁLOGO OFICIAL (imágenes buenas)
// ===============================
// ===============================
// CATÁLOGO OFICIAL
// ===============================
const catalog = [
  {
    id: "001",
    title: "Gochu flavour",
    price: "6.99€",
    img: "assets/gochu-sombra.png"
  },
  {
    id: "002",
    title: "Sweet Chili & Lime flavour",
    price: "6.99€",
    img: "assets/sweet-chili-sombra.png"
  },
  {
    id: "003",
    title: "White Miso flavour",
    price: "6.99€",
    img: "assets/miso-sombra.png"
  }
];

localStorage.setItem("catalog", JSON.stringify(catalog));


// ===============================
// FUNCIÓN ÚNICA DE CARRITO
// ===============================
function addToCartById(productId) {

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const catalog = JSON.parse(localStorage.getItem('catalog')) || [];

  const productInfo = catalog.find(p => p.id === productId);

  if (!productInfo) {
    console.warn("Producto no encontrado:", productId);
    return;
  }

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: productInfo.id,
      title: productInfo.title,
      price: productInfo.price,
      img: productInfo.img,   // 👈 SIEMPRE MISMA IMAGEN
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}


// ===============================
// BOTÓN DESDE PÁGINA INDIVIDUAL
// ===============================
const buttonProduct = document.querySelector('.Product-button');

if (buttonProduct) {
  buttonProduct.addEventListener('click', () => {

    const section = buttonProduct.closest('.Product-section');
    if (!section) return;

    const productId = section.dataset.id;

    addToCartById(productId);
  });
}


// ===============================
// BOTONES DESDE INDEX
// ===============================
const buttonsPlus = document.querySelectorAll('.Shop-button--button');

buttonsPlus.forEach(button => {
  button.addEventListener('click', () => {

    const article = button.closest('.Shop-article');
    const id = article.getAttribute('data-id');

    addToCartById(id);
  });
});
