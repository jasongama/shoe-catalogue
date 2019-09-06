const addBtn =  document.querySelector(".addBtn");
const filterBtn = document.querySelector(".filterBtn");
const checkButton = document.querySelector(".BasketButton");
const brandElement = document.querySelector(".brandStyle");
const colorElement = document.querySelector(".colorStyle");
const sizeElement = document.querySelector(".sizeStyle");

var kicksFactory = ShoeFactory();

 
var KicksTemplate = document.querySelector(".brandTemplate").innerHTML;

var userTemplate = Handlebars.compile(KicksTemplate);

var userDataElem = document.querySelector(".kicks");
// if(kicksFactory.brand){
//     let newShoe = {shoe}
// }

function brands(list){
    let shoeTemplate = document.querySelector(".brandTemplates").innerHTML 
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
    const currentSize = Number(sizeElement.value);

    var filteredShoes=[];
    
    if(currentBrand ==="" && currentColor === "" && currentSize ===""){
     filteredShoes =kicksFactory.addedshoes();
    }
    
    else{
        const shoesStore ={
        brand: currentBrand,
        color: currentColor,
        size:  currentSize
    };
    
    filteredShoes =kicksFactory.allTheBrands(shoesStore);

  }
  var userDataElem = userTemplate(filteredShoes)
  userDataElem.innerHTML = userDataElem;
}

addBtn.addEventListener("click",brandFunction );
filterBtn.addEventListener("click",shoesFilters );