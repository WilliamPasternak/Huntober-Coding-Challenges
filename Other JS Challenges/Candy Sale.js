import products from "./data.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, put it into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
*/

function getSaleItems(data){
    return data
    .filter(product => product.type === "sweet")
    .map(({item, price}) => {
        return {
            item: item,
            price: price
        }
    });
};

const shoppingCart = getSaleItems(products);
console.log(shoppingCart);