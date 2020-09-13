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
  getAllCart(){
    return cart;
  }
};


class Receipt {
  saleTax(){
    let salestax = 0;
    for (const item of cart) {
      if(item.taxType === 'basic'){
        salestax += item.price * .10;
      }
      if(item.taxType === 'import' && item.catagory !== 'Food'){
        salestax += item.price * .15;
      }
      if(item.taxType === 'import' && item.catagory === 'Food'){
        salestax += item.price * .05;
      }

    }
    console.log('counter with round', salestax.toFixed(2));
    console.log('counter without round', salestax);

    return salestax.toFixed(2);
  };




};


let shop = new Cart;
let look = new Receipt;
shop.addProduct('Book');
shop.addProduct('Imported Bottle Perfume, Small');
shop.addProduct('Music CD');
shop.addProduct('Imported Box of Chocolates');
// shop.removeProduct('Music CD');
// console.log(shop.getAllCart());
console.log('this is total sales tax price of item', look.saleTax());





// "catagory":"books",
// "price":12.49,
// "taxType":"except"