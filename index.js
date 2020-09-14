
'use strict';

let Store = require('./cart');

// let shop = new Store.Cart;
// let look = new Store.Receipt;

let shop2 = new Store.Cart;
let look2 = new Store.Receipt;


// shop.addProduct('Book',1);
// shop.addProduct('Book',1);
// shop.addProduct('Music CD',4);
// shop.addProduct('Chocolate Bar',2);
// shop.getAllCart();
// look.totalOfEverythingAndSaleTax();

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++')

shop2.addProduct('Imported Box of Chocolates', 6);
shop2.addProduct('Imported Bottle Perfume',10);
shop2.getAllCart();
look2.totalOfEverythingAndSaleTax();
