'use strict'






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
//añadir producto al carrito
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

//carrousel story 


const carruselImgs = document.querySelectorAll(`.Carrousel-img`)
console.log(carruselImgs)
const carruselWrapper = document.querySelector(`.Carrousel-wrapper`)
console.log(carruselWrapper)


let counter=0

let numImage
numImage = carruselImgs.length 
console.log(numImage)

carruselWrapper.style.width=`${100 * numImage}%`
carruselWrapper.style.gridTemplateColumns = `repeat(${numImage},1fr)`



function autoMove() {
    counter++;

    if (counter >= numImage) {
        counter = 0;
    }

    carruselWrapper.style.translate = `-${(100 / numImage) * counter}%`;

}

// que se mueva cada 3 segundos
setInterval(autoMove, 5000);
