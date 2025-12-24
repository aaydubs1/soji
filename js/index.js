'use strict'
// Expansion de la caja de introducción (Intro-article) al hacer scroll
const expandBox = document.querySelector(`.Intro-article`)
const contentBox = document.querySelector(`.Intro-article--wrapper`)
console.log(contentBox)


window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        expandBox.classList.add(`expand`)
        contentBox.classList.add(`none`)
    } else {
        expandBox.classList.remove(`expand`)
        contentBox.classList.remove(`none`)
    }
})
//Header translate escondido/aparece segun el scroll 
// bottle efecto translate segun scroll
const header = document.querySelector(`.Header`)

const bottle = document.querySelector(`.Ingredients-img`)

const mosaic = document.querySelectorAll(`.Intro-img`)
console.log(mosaic)

let lastPosition = window.scrollY

window.addEventListener(`scroll`, () => {
    let actualPosition = window.scrollY

    if (actualPosition > lastPosition) {
        header.classList.add(`invisible`)

        mosaic.forEach((_, i) => {
            mosaic[i].classList.add(`blur`)
        })


    } else {
        header.classList.remove(`invisible`)
        mosaic.forEach((_, i) => {
            mosaic[i].classList.remove(`blur`)
        })
    }

    if (actualPosition > 400) {
        bottle.classList.add(`visible`)
        bottle.classList.remove(`visibleTranslateReverse`)
    } else {
        bottle.classList.remove(`visible`)
        bottle.classList.add(`visibleTranslateReverse`)
    }


    lastPosition = actualPosition
})

//When mouseover en Intro-article (expandBox), Intro-img (mosaic) add style blur 5px

expandBox.addEventListener(`mouseover`, () => {
    mosaic.forEach((_, i) => {
        mosaic[i].classList.add(`blur`)
    })
})

expandBox.addEventListener(`mouseout`, () => {
    mosaic.forEach((_, i) => {
        mosaic[i].classList.remove(`blur`)
    })
})

//When scroll hasta window bottom, Ingredients-arrow--svg add class .arrowOpacity

const arrow = document.querySelectorAll(`.Ingredients-arrow`)
const paths = document.querySelectorAll('.Ingredients-arrow--svg');

window.addEventListener(`scroll`, () => {
    let actualPosition = window.scrollY;      // posición del scroll
    let windowHeight = window.innerHeight;    // altura visible de la ventana

    if (actualPosition >= windowHeight) {
        arrow.forEach((_, i) => {
            arrow[i].classList.add(`arrowOpacity`)
        })
        paths.forEach((_,i)=>{
            paths[i].classList.add(`arrowOpacity`)
        })
    } else {
        arrow.forEach((_, i) => {
            arrow[i].classList.remove(`arrowOpacity`)
        })
          paths.forEach((_,i)=>{
            paths[i].classList.remove(`arrowOpacity`)
        })
    }
})