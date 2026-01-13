'use strict'



//Header translate escondido/aparece segu el scroll 
// bottle efecto translate segun scroll
const header = document.querySelector(`.Header`)

const bottle = document.querySelector(`.Ingredients-img`)
const bottlethai = document.querySelector(`.Ingredients-img--thailand`)
const bottlejapon = document.querySelector(`.Ingredients-img--japon`)

const ingredients = document.querySelector('.Ingredients-wrapper')


let lastPosition = window.scrollY

window.addEventListener(`scroll`, () => {
    let actualPosition = window.scrollY


    if (actualPosition > 400) {
        bottle.classList.add(`visible`)
        bottle.classList.remove(`visibleTranslateReverse`)
    } else {
        bottle.classList.remove(`visible`)
        bottle.classList.add(`visibleTranslateReverse`)
    }

    if (actualPosition > 400) {
        bottlethai.classList.add(`visible`)
        bottlethai.classList.remove(`visibleTranslateReverse`)
    } else {
        bottlethai.classList.remove(`visible`)
        bottlethai.classList.add(`visibleTranslateReverse`)
    }

    if (actualPosition > 400) {
        bottlejapon.classList.add(`visible`)
        bottlejapon.classList.remove(`visibleTranslateReverse`)
    } else {
        bottlejapon.classList.remove(`visible`)
        bottlejapon.classList.add(`visibleTranslateReverse`)
    }



    lastPosition = actualPosition
})



//When scroll hasta window bottom, Ingredients-arrow--svg add class .arrowOpacity


const textIngredients = document.querySelectorAll(`.Ingredients-h3`)
const IngredientsP = document.querySelectorAll(`.Ingredients-p`)
const IngredientsTitle = document.querySelectorAll(`.Ingredients-title`)

//Ingredients text
textIngredients.forEach((_, i) => {
    textIngredients[i].addEventListener(`click`, () => {
        textIngredients.forEach((_, i) => {
            textIngredients[i].classList.remove(`text-decoration`)
            textIngredients[i].classList.remove(`hidden`)
        })

        IngredientsP.forEach((_, i) => {
            IngredientsP[i].classList.remove(`visible`)
        })

        IngredientsTitle.forEach((_, i) => {
            IngredientsTitle[i].classList.remove('end'); // quitar de todos
        });

        textIngredients[i].classList.add(`text-decoration`)
        IngredientsP[i].classList.add(`visible`)
        IngredientsTitle[i].classList.add(`end`)



    })
})

'use strict';


const carrousel = document.querySelector('.Ingredients-carrousel')
const slides = document.querySelectorAll('.Ingredients')
const btnNext = document.querySelector('.right')
const btnPrev = document.querySelector('.left')

//contador
let counter = 0
const numSlides = slides.length

//ancho de la contenedora(300% si hay 3 slides)
carrousel.style.width = `${100 * numSlides}%`

//mover carrousel
const moverCarrousel = () => {
    carrousel.style.translate = `-${(100 / numSlides) * counter}%`
}

//siguiente
const nextSlide = () => {
    counter++
    if (counter === numSlides) {
        counter = 0;
    }
}

//anterior
const prevSlide = () => {
    counter--
    if (counter < 0) {
        counter = numSlides - 1
    }
}
//btnNext
btnNext.addEventListener('click', () => {
    nextSlide();
    moverCarrousel();
})
//btnPrev
btnPrev.addEventListener('click', () => {
    prevSlide();
    moverCarrousel();
})



btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)


const cartClose = document.querySelector('.Cart-close')
const cartMenu = document.querySelector('.Shop-cart')
const cartIcon = document.querySelector('.Header-cart-button')


cartIcon.addEventListener(`click`, () => {
    cartMenu.classList.add(`visible`)
})

cartClose.addEventListener(`click`, () => {
    cartMenu.classList.remove(`visible`)
})

const buttonPlus = document.querySelectorAll(`.Shop-button--button`)
const cartItem = document.querySelectorAll(`.Cart-item`)
const cartItemRemove = document.querySelectorAll(`.Cart-item--remove`)

buttonPlus.forEach((_, i) => {
    buttonPlus[i].addEventListener(`click`, () => {
        cartItem[i].classList.add(`visible`)
        cartMenu.classList.add(`visible`)
        header.classList.remove(`invisible`)
        cartMenu.classList.remove(`invisible`)
    })
})
cartItemRemove.forEach((_, i) => {
    cartItemRemove[i].addEventListener(`click`, () => {
        cartItem[i].classList.remove(`visible`)
    })
})

//Passport book open

const cover = document.querySelector(`.Passport-image--cover`)
const firstPage = document.querySelector(`.Passport-image--firstpage`)
const stamp = document.querySelectorAll(`.Passport-stamp`)
const Trip = document.querySelectorAll(`.miniTrip`)
const RoutesArrow = document.querySelector(`.Routes-arrow`)
const titlePassport = document.querySelector(`.Passport-title`)

stamp.forEach((_, i) => {
    stamp[i].addEventListener(`click`, () => {
        firstPage.classList.add(`closeBook`)
        titlePassport.classList.add(`display`)

        stamp.forEach((_, i) => {
            stamp[i].classList.add(`visible`)
        })
        Trip.forEach((_, i) => {
            Trip[i].classList.remove(`display`)
        })
        Trip[i].classList.add(`display`)
        RoutesArrow.classList.add(`display`)



    })
})


RoutesArrow.addEventListener(`click`, () => {
    firstPage.classList.remove(`closeBook`)
    titlePassport.classList.remove(`display`)

    stamp.forEach((_, i) => {
        stamp[i].classList.remove(`visible`)
    })
    Trip.forEach((_, i) => {
        Trip[i].classList.remove(`display`)
    })
    RoutesArrow.classList.remove(`display`)

})






//Faq questions

const answer = document.querySelectorAll(`.Faq-question--answer`)
const question = document.querySelectorAll(`.Faq-question--title`)

question.forEach((_, i) => {
    question[i].addEventListener(`click`, () => {
        answer.forEach((_, i) => {
            answer[i].classList.remove(`show`)
        })
        answer[i].classList.add(`show`)
    })

})

// añadir al carrito 

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



const cards = document.querySelectorAll('.Recepies-column');
const cardImg = document.querySelectorAll(`.Recepies-img--img`)
const cardText = document.querySelectorAll(`.Recepies-text`)


cards.forEach((_, i) => {
    cards[i].addEventListener('mouseover', () => {
        cards[i].classList.add('show');


    });

    cards[i].addEventListener('mouseout', () => {
        cards[i].classList.remove('show');


    });

});

