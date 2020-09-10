'use strict';

const data = require( './data/store.json');

let products = Object.keys(data);
let cart = [];


function getOneProduct(product){
  if (products.includes(product)){
    cart.push(product)
    return `We have this ${product} in store `;
  }else if(!products.includes(product)){
    return `We do have this ${product} in store`;
  }
}
console.log( products, 'this should show all the keys');
console.log(getOneProduct('Book'), 'this show one item');
console.log(getOneProduct('Book'), 'this show same  item');
console.log(getOneProduct('Music-CD'), 'adding to the cart');
console.log(cart, 'this is the shoping cart');
