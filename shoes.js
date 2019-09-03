const addBtn =  document.querySelector(".addBtn");
const filterBtn = document.querySelector(".filterBtn");
const checkButton = document.querySelector(".BasketButton");
const brandElement = document.querySelector(".brandStyle");
const colorElement = document.querySelector(".colorStyle");
const sizeElement = document.querySelector(".sizeStyle");

var kicksFactory = ShoeFactory();
 
var KicksTemplate = document.querySelector(".KicksTemplate").innerHTML;

var userTemplate = Handlebars.compile(KicksTemplate);

var userDataElem = document.querySelector(".Kicks");

function  brandFunction(){



}

function shoesFilters(){
    const currentBrand = brandElement.value;
    const  currentColor = colorElement.value;
    let filteredShoes=[];
     
    const shoesStore ={
        brand: currentBrand,
        color:currentColor
    };
    const filteredShoes = kicksFactory.shoeFliter(shoesStore);
    for(var i=0; i < filteredShoes.length; i++){
        const currentKicks =filteredShoes[i];

        const newKicks 
    } 



}