'use strict'

const expandBox = document.querySelector(`.Intro-article`)
const contentBox = document.querySelector(`.Intro-article--wrapper`)
console.log(contentBox)

// Agregar listener que se ejecuta cada vez que haces scroll
window.addEventListener('scroll', () => {
    if(window.scrollY > 20){
        expandBox.classList.add(`expand`)
        contentBox.classList.add(`none`)
    }else{
        expandBox.classList.remove(`expand`)
        contentBox.classList.remove(`none`)
    }
})