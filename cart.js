'use strict';

const data = require('./data/store.json');

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
    console.log('This your cart:', cart);
  }
};


class Receipt{
  totalOfEverythingAndSaleTax(){
    let total = 0;
    let salestax = 0;
    for (const item of cart) {
      if (item.taxType === 'except'){
        total += item.price;
        console.log( `${item.item}: $${item.price} ` );
      }
      if(item.taxType === 'basic'){
        total += item.price + (item.price * .10);
        salestax += item.price * .10;
        let itemPlusTax = item.price + (item.price * .10);
        console.log( `${item.item}: $${itemPlusTax.toFixed(2)} ` );
      }
      if(item.taxType === 'import' && item.catagory !== 'Food'){
        salestax += item.price * .15;
        total += item.price + (item.price * .15);
        let itemPlusTax = item.price + (item.price * .15);
        console.log( `${item.item}: $${itemPlusTax.toFixed(2)}` );
      }
      if(item.taxType === 'import' && item.catagory === 'Food'){
        total += item.price + (item.price * .05);
        salestax += item.price * .05;
        let itemPlusTax = item.price + (item.price * .05);
        console.log( `${item.item}: $${itemPlusTax.toFixed(2)} ` );
      }
    }
    console.log(`Sales Tax: $${salestax.toFixed(2)}`);
    console.log(`Total: $${total.toFixed(2)}`);
  };

};


// let shop = new Cart;
// let look = new Receipt;
// shop.addProduct('Book');
// shop.addProduct('Imported Bottle Perfume, Small');
// shop.addProduct('Music CD');
// shop.addProduct('Imported Box of Chocolates');
// // shop.removeProduct('Music CD');
// // console.log(shop.getAllCart());
// look.totalSaleTax();
// look.totalOfEverything();

module.exports = {Cart:Cart, Receipt:Receipt,};