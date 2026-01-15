'use strict'







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
