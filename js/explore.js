'strict mode'

/* =======================================================
 * Interacciones:
 *   - Clic en sellos (stamps) para cerrar la página del pasaporte
 *   - Mostrar título del pasaporte al hacer clic en sello
 *   - Mostrar Trip correspondiente al sello clickeado
 *   - Mostrar flecha de rutas al seleccionar un Trip
 *   - Clic en flecha de rutas para cerrar la primera página y ocultar información
 * Datos:
 *   - Elementos del DOM: primera página, sellos, Trips, flecha de rutas, título
 *   - Estado visual de la página, sellos, Trips y flecha de rutas
 * Estructura:
 *   - Constantes (selectores DOM)
 *   - Eventos:
 *       * Clic en cada sello → Abrir pasaporte, mostrar Trip y título
 *       * Clic en flecha de rutas → Cerrar pasaporte, ocultar Trip y título
 *   - Funciones:
 *       * N/A (todo se maneja dentro de los eventos)
 * ======================================================= */



const firstPage = document.querySelector(`.Passport-image--firstpage`)
const stamp = document.querySelectorAll(`.Passport-stamp`)
const Trip = document.querySelectorAll(`.miniTrip`)
const RoutesArrow = document.querySelector(`.Routes-arrow`)
const titlePassport = document.querySelector(`.Passport-title`)


/* Este bloque de código está agregando un escuchador de eventos de clic a cada elemento del
arreglo `stamp`. Cuando se hace clic en un elemento de `stamp`, se realizan las siguientes acciones: */

stamp.forEach((_, i) => {
    stamp[i].addEventListener(`click`, () => {
        // Al hacer clic en un sello, se "cierra" la primera página del libro
        firstPage.classList.add(`closeBook`) // Añade la clase para animar o cerrar la primera página

        // Muestra el título del pasaporte
        titlePassport.classList.add(`display`) // Añade la clase para mostrar el título

        // Hace visibles todos los elementos del arreglo stamp
        stamp.forEach((_, i) => {
            stamp[i].classList.add(`visible`) // Añade clase visible a cada sello
        })

        // Oculta todos los elementos de Trip
        Trip.forEach((_, i) => {
            Trip[i].classList.remove(`display`) // Remueve la clase display de cada Trip
        })

        // Muestra únicamente el Trip correspondiente al sello clickeado
        Trip[i].classList.add(`display`) // Añade clase display solo al Trip seleccionado

        // Muestra la flecha de rutas
        RoutesArrow.classList.add(`display`) // Añade clase display para que la flecha aparezca
    })
})

/* El bloque de código `RoutesArrow.addEventListener('click', () => { ... })` está agregando un
escuchador de eventos de clic al elemento `RoutesArrow`. Cuando se hace clic en el elemento
`RoutesArrow`, se realizan las siguientes acciones: */

RoutesArrow.addEventListener(`click`, () => {
    // Al hacer clic en la flecha, se "abre" de nuevo la primera página del libro
    firstPage.classList.remove(`closeBook`) // Remueve la clase closeBook

    // Oculta el título del pasaporte
    titlePassport.classList.remove(`display`) // Remueve la clase display del título

    // Oculta todos los sellos
    stamp.forEach((_, i) => {
        stamp[i].classList.remove(`visible`) // Remueve clase visible de cada sello
    })

    // Oculta todos los elementos Trip
    Trip.forEach((_, i) => {
        Trip[i].classList.remove(`display`) // Remueve clase display de cada Trip
    })

    // Oculta la flecha de rutas
    RoutesArrow.classList.remove(`display`) // Remueve clase display de la flecha
})
