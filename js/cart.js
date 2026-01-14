'strict mode'

const buttonProduct = document.querySelector('.Product-button');

if (buttonProduct) {
    buttonProduct.addEventListener('click', () => {

        const section = buttonProduct.closest('.Product-section');
        if (!section) return;

        const productId = section.dataset.id;
        const titleEl = section.querySelector('.Product-title');       // h1
        const priceEl = section.querySelector('.Product-price');       // span
        const imgEl = section.querySelector('.Product-image--img img'); // img dentro del div

        const product = {
            id: productId || Date.now(),
            title: titleEl ? titleEl.textContent : '',
            price: priceEl ? priceEl.textContent : '',
            img: imgEl ? imgEl.src : '',
            quantity: 1
        };

        // obtener carrito
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // comprobar si ya existe
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Producto añadido al carrito:', product);
    });
}


// seleccionar todos los botones de "añadir al carrito"
const buttonsPlus = document.querySelectorAll('.Shop-button--button');

buttonsPlus.forEach(button => {
    button.addEventListener('click', () => {

        // obtener el artículo asociado al botón
        const article = button.closest('.Shop-article');

        // capturar los datos del producto
        const id = article.getAttribute('data-id');           // <-- id único del HTML
        const img = article.querySelector('.Shop-image--img').src;
        const title = article.querySelector('.Shop-h3').textContent;
        const price = article.querySelector('.Shop-price').textContent;

        const product = {
            id: id,
            img: img,
            title: title,
            price: price,
            quantity: 1
        };

        addToCart(product);
    });
});

// función para agregar al carrito
function addToCart(product) {
    // obtener el carrito del localStorage o crear uno vacío
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // comprobar si el producto ya existe usando el id
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity++;  // si existe, aumentar la cantidad
    } else {
        cart.push(product);          // si no, agregar el producto nuevo
    }

    // guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

