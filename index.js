
'use strict';

let Store = require('./cart');

let shop = new Store.Cart;
let shop2 = new Store.Cart;
let shop3 = new  Store.Cart;


shop.addProduct('Book',1);
shop.addProduct('Book',1);
shop.addProduct('Music CD',4);
shop.addProduct('Chocolate Bar',2);
shop.getAllCart();
shop.totalOfEverythingAndSaleTax();

// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++');

// shop2.addProduct('Imported Box of Chocolates', 6);
// shop2.addProduct('Imported Bottle Perfume',10);
// // shop2.addProduct('Imported Bottle Perfume',10);
// shop2.getAllCart();
// shop2.totalOfEverythingAndSaleTax();


// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++');

// shop3.addProduct('Imported Bottle Perfume',9);
// shop3.addProduct('Bottle Perfume',5);
// shop3.addProduct('Headache Medication',3);
// shop3.addProduct('Imported box of chocolates',7);
// // shop3.addProduct('Imported box of chocolates',7);
// shop3.getAllCart();
// shop3.totalOfEverythingAndSaleTax();
