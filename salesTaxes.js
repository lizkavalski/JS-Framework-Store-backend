'use strict';

const data = require( './data/store.json');

let cart = [] ;

class Cart {
  addProduct(name){
    let findOne = data.filter(data => data.name === name);
    cart.push(findOne);
    return findOne;
  }
  removeProduct(name){
    for (let i = 0; i < cart.length; i++){
      if (cart.includes(name)){
        cart.splice(i,1);
      }
    }
    return cart;
  }
};

let shoppingCart = new Cart;
// function filterTax(taxType){
//   let filterTaxType = cart.filter(data => data.taxType === taxType);
//   return filterTaxType;
// }



shoppingCart.addProduct('Book');
shoppingCart.addProduct('Bottle Perfume');
shoppingCart.addProduct('Music CD');
console.log(`${shoppingCart.removeProduct('Bottle Perfume')} this was removed`);
console.log( 'this is the shopping cart', cart);


