const addBtn =  document.querySelector(".addBtn");
const filterBtn = document.querySelector(".filterBtn");
const checkButton = document.querySelector(".BasketButton");
const brandElement = document.querySelector(".brandStyle");
const colorElement = document.querySelector(".colorStyle");
const sizeElement = document.querySelector(".sizeStyle");

var kicksFactory = ShoeFactory();
 
// var KicksTemplate = document.querySelector(".KicksTemplate").innerHTML;

// var userTemplate = Handlebars.compile(KicksTemplate);

// var userDataElem = document.querySelector(".Kicks");

if(kicksFactory.brand){
    let newShoe = {shoe}
}

function brands(list){
    let shoeTemplate = document.querySelector(".brandTemplate").innerHTML 
    let shoeBrandTemplate= Handlebars.compile(shoeTemplate)
    let printShoes= shoeBrandTemplate(list) 
    document.querySelector(".brand").innerHTML=printShoes;
}
function  brandFunction(){

console.log(brandElement.value);
console.log(colorElement.value);
console.log(sizeElement.value);


}








function shoesFilters(){
    const currentBrand = brandElement.value;
    const  currentColor = colorElement.value;
    const currentSize = sizeElement.value;

    let filteredShoes=[];
    if(currentBrand ==="" && currentColor === "" && currentSize ===""){
     filteredShoes =kicksFactory.addedshoes()
    }
     else{
    const shoesStore ={
        brand: currentBrand,
        color: currentColor,
        size: currentSize
    };
    filteredShoes =kicksFactory.shoeFliter(shoesStore);

  }



}

addBtn.addEventListener("click",brandFunction );