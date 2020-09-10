'use strict';

const data = require( './data/store');

let cart = [] ;


function addProduct(name){
  if(data.items === name);
  cart.push(name);
}
function removeProduct(name){
  let index = cart.indexOf(name);
  if (index > -1) {
    cart.splice(index, 1);
  }
  return name;
}

function getPrice(name){
  let findItem = cart.filter()
}


addProduct('Book');
addProduct('Bottle Perfume');
addProduct('Music CD');
removeProduct('Bottle Perfume');
console.log( 'this is the cart', cart);

// "catagory":"books",
// "price":12.49,
// "taxType":"except"