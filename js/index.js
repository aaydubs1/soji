'use strict'
// Expansion de la caja de introducción (Intro-article) al hacer scroll
const expandBox = document.querySelector(`.Intro-article`)
const contentBox = document.querySelector(`.Intro-article--wrapper`)
console.log(contentBox)


window.addEventListener('scroll', () => {
    if(window.scrollY > 20){
        expandBox.classList.add(`expand`)
        contentBox.classList.add(`none`)
    }else{
        expandBox.classList.remove(`expand`)
        contentBox.classList.remove(`none`)
    }
})
//Header translate escondido/aparece segun el scroll 
// bottle efecto translate segun scroll
const header = document.querySelector(`.Header`)

const bottle = document.querySelector(`.Ingredients_video`)

const mosaic = document.querySelectorAll(`.Intro-img`)
console.log(mosaic)

let lastPosition = window.scrollY

window.addEventListener(`scroll`, ()=>{
    let actualPosition = window.scrollY

      if (actualPosition > lastPosition){ 
        header.classList.add(`invisible`)

        mosaic.forEach((_,i)=>{
              mosaic[i].classList.add(`blur`)
        })
      
        
   } else {
    header.classList.remove(`invisible`)
    mosaic.forEach((_, i) => {
        mosaic[i].classList.remove(`blur`)
    })
}

    if(actualPosition> 500){
        bottle.classList.add(`visible`)
        bottle.classList.remove(`visibleTranslateReverse`)
    }else {  (actualPosition< lastPosition)
        bottle.classList.remove(`visible`)
        bottle.classList.add(`visibleTranslateReverse`)
    }
        
    
    lastPosition = actualPosition
})

//Botella aparece en un translate como el scroll 


