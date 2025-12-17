'use strict'

const expandBox = document.querySelector(`.Intro-article`)

// Agregar listener que se ejecuta cada vez que haces scroll
window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        expandBox.classList.add(`expand`)
    }else{
        expandBox.classList.remove(`expand`)
    }
})