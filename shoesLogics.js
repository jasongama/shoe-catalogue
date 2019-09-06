function ShoeFactory() {
    var shoes = [{
            brand: "Nike",
            size: 5,
            price: 500,
            color: "White",
            stock: 10,


        },

        {
            brand: "Johnston and Murphy",
            size: 11,
            price: 2500,
            color: "Green",
            stock: 15,


        },
        {
            brand: "Skechers",
            size: 12,
            price: 2700,
            color: "Pactic blue",
            stock: 9,


        },
        {
            brand: "LeBron",
            size: 13,
            price: 2900,
            color: "persian blue",
            stock: 29,


        },
        {
            brand: "Tommy Hilfiger",
            size: 14,
            price: 3000,
            color: "Red",
            stock: 27,


        },
        {
            brand: "Addas",
            size: 6,
            price: 600,
            color: "Blue",
            stock: 10,


        },
        {
            brand: "Air Jordan",
            size: 7,
            price: 700,
            color: "Black",
            stock: 20,


        },
        {
            brand: "Fila",
            size: 8,
            price: 900,
            color: "Yellow",
            stock: 25,


        },
        {
            brand: "YEEZUS",
            size: 9,
            price: 1200,
            color: "Grey",
            stock: 30,


        },
        {
            brand: "Versace",
            size: 10,
            price: 1500,
            color: "White",
            stock: 15,


        }
    ];

    function addShoes(brand, size, price, color, stock) {
        const shoeObj = {
            brand,
            size,
            color,
            price,
            stock
        };
        shoes.push(shoeObj);
    }

    function addedshoes() {
        return shoes;
    }


              function sheosBrand(userBrand){
                  let newbrand = [];
                  for(var i = 0; i<shoes.length; i++){
                      if(userBrand == shoes[i].brand){
                          newbrand.push(shoes[i] )
                      }
                  }
             
                  return newbrand;
             }
             function colorsBrand(colorBrand){
                var newColor =[];
                for(var i= 0; i<shoes.length; i++){
                 if(colorBrand == shoes[i].color){
                     newColor.push(shoes[i])
                 }
                }
                return newColor
            }
            function sizeBrand(brandSize){
                var newSize=[];
                for(var i= 0; i<shoes[i].length; i++){
                    if(brandSize == shoes[i].size){
                        newSize.push(shoes[i])
                    }
                }
                return newSize
            }
            
                function allTheBrands(){
                    var allTheNumBrand = [];
                    for (var i=0; i<shoes.length; i++){
                        if(userBrand == shoes[i].brand && colorBrand ==shoes[i].color && brandSize == shoes[i].size){
                            allTheNumBrand.push(shoes[i])
                        }
                    }
                    return allTheNumBrand;
                }

    return {
        addShoes,
        addedshoes,
        sheosBrand,
        colorsBrand,
        sizeBrand,
        allTheBrands
    }
} 