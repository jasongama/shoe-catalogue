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

    function shoeFliter(kicksFilter) {
        const filterBrand = kicksFilter.brand;
        const filterColor = kicksFilter.color;
        const newShoes = [];
        if (filterBrand !== undefined && filterColor !== undefined) {
            for (var i = 0; i < shoes.length; i++) {
                var currentshoes = shoes[i];
            }
            if (currentshoes.brand === filterBrand && currentshoes.color === filterColor) {
                newShoes.push(currentshoes);
            } else if (filterBrand !== undefined) {
                for (var i = 0; i < shoes.length; i++) {
                    currentshoes = shoes[i];
                }
                if (currentshoes.brand === filterBrand) {
                    newShoes.push(currentshoes)
                }
            }else if(filterColor !== undefined){
                for(var i = 0; i<shoes.length; i++){
                    currenshoes = shoes[i];
                }
                if(currentshoes.color === filterColor){
                    newShoes.push(currentshoes)
                }
            }
                return newShoes;
        }


    }

    return {
        addShoes,
        addedshoes,
        shoeFliter,
    }
}