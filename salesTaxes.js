'use strict';

const data = require('./data/store.json');
// console.log('this is data:', data)
let cart = [] ;

class Cart {
  addProduct(item){
    let getOne = data.filter(data => data.item === item);
    cart.push(getOne);
    cart.flat(1);
    cart = cart.flat();
  }

  removeProduct(item){
    cart = cart.filter(cart => cart.item !== item);
  }
};


class Price {
  FindPrice(item){
    if (data.indexOf(item) === data)
      cart.push(item);
  }
}

let shop = new Cart;
// let look = new Price;
shop.addProduct('Book');
shop.addProduct('Bottle Perfume');
shop.addProduct('Music CD');
shop.removeProduct('Music CD');
console.log( 'this is the cart', cart);
// console.log('this is getting the item', look.getPrice('Book'));





// "catagory":"books",
// "price":12.49,
// "taxType":"except"