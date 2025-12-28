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
const bottlethai = document.querySelector(`.Ingredients-img--thailand`)
const bottlejapon = document.querySelector(`.Ingredients-img--japon`)

const mosaic = document.querySelectorAll(`.Intro-img`)
console.log(mosaic)

const ingredients = document.querySelector('.Ingredients-wrapper');


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

const paths = document.querySelectorAll('.Ingredients-arrow--svg')
const textIngredients = document.querySelectorAll(`.Ingredients-h3`)
const IngredientsP = document.querySelectorAll(`.Ingredients-p`)

window.addEventListener(`scroll`, () => {
    let scrollBottom = window.scrollY + window.innerHeight //window.scrollY = cuánto se baja //window.innerHeight = altura visible de la pantalla // scrollBottom = el punto más bajo que  se ve en el momento del scroll
    let ingredientsBottom = ingredients.offsetTop + ingredients.offsetHeight //offsetTop = distancia desde arriba de la página hasta el inicio de ingredients. //offsetHeight = altura total de ingridients

    if (scrollBottom >= ingredientsBottom) {

        paths.forEach((_, i) => {
            paths[i].classList.add(`arrowOpacity`)
        })

        textIngredients.forEach((_, i) => {
            textIngredients[i].classList.add(`text-transition`)
        })
    } else {

        paths.forEach((_, i) => {
            paths[i].classList.remove(`arrowOpacity`)
        })

        textIngredients.forEach((_, i) => {
            textIngredients[i].classList.remove(`text-transition`)
        })
    }
})

//Ingredients text
textIngredients.forEach((_,i)=>{
 textIngredients[i].addEventListener(`mouseover`,()=>{
    textIngredients.forEach((_,i)=>{
        textIngredients[i].classList.remove(`text-decoration`)
        textIngredients[i].classList.add(`hidden`)
       
        paths.forEach((_,i)=>{
            paths[i].classList.add(`hidden`)
        })
    
    })
     textIngredients[i].classList.toggle(`text-decoration`)
      textIngredients[i].classList.toggle(`hidden`)
       IngredientsP[i].classList.toggle(`visible`)
 })

  textIngredients[i].addEventListener(`mouseout`,()=>{
    textIngredients.forEach((_,i)=>{
        textIngredients[i].classList.remove(`text-decoration`)
        textIngredients[i].classList.remove(`hidden`)
    })
    IngredientsP[i].classList.remove(`visible`)
    paths.forEach((_,i)=>{
            paths[i].classList.remove(`hidden`)
        })
 })

})

'use strict';

// ELEMENTOS
const carrousel = document.querySelector('.Ingredients-carrousel');
const slides = document.querySelectorAll('.Ingredients');
const btnNext = document.querySelector('.right');
const btnPrev = document.querySelector('.left');

// CONTADOR
let counter = 0;
const numSlides = slides.length;

// ANCHO DE la contenedora(300% si hay 3 slides)
carrousel.style.width = `${100 * numSlides}%`;

// MOVER CARRUSEL
const moverCarrousel = () => {
  carrousel.style.translate = `-${(100 / numSlides) * counter}%`;
};

// SIGUIENTE
const nextSlide = () => {
  counter++
  if (counter === numSlides) {
    counter = 0;
    } 
};

// ANTERIOR
const prevSlide = () => {
  counter--
  if (counter < 0){
    counter = numSlides - 1
  } 
};
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


// EVENTOS
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);
