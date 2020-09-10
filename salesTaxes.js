'use strict';

const data = require( './data/store.json');

let cart = [] ;

class Cart {
  addProduct(name){
    let addOne = data.filter(data => data.name === name);
    cart.push(addOne);
    return cart;
  }
  removeProduct(name){
    let removeOne = cart.filter(data => data.name === name);
    cart.splice(0,removeOne);
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
console.log('this was removed', shoppingCart.removeProduct('Bottle Perfume'));
// console.log( 'this is the shopping cart', cart);


