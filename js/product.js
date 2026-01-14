const productList = document.querySelectorAll(`.Product-list`) 
const productSubtitles = document.querySelectorAll(`.Product-wrapper`) 

console.log(productList);
console.log(productSubtitles);

productSubtitles.forEach((_, i) => {
  productSubtitles[i].addEventListener('click', () => {

    const isOpen = productList[i].classList.contains('display');

    // cerrar todos
    productList.forEach((_, j) => {
      productList[j].classList.remove('display');
    });

    // si NO estaba abierto, lo abrimos
    if (!isOpen) {
      productList[i].classList.add('display');
    }

  });
});
