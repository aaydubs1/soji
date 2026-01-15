'strict mode'

//Passport book open

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



