const productList = document.querySelectorAll(`.Product-list`) 
const productSubtitles = document.querySelectorAll(`.Product-wrapper`) 

console.log(productList);
console.log(productSubtitles);

productSubtitles.forEach((_,i)=>{
    productSubtitles[i].addEventListener(`click`, ()=>{
        productList.forEach((_,i)=>{
            productList[i].classList.remove(`display`)
        })
   productList[i].classList.add(`display`)
    })
})