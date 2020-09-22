
'use strict';

const Cart = require('./cart');
const Receipt = require('./receipt');

// let shop = new Cart;
// let buy = new Receipt;

let shop2 = new Cart;
let buy2 = new Receipt;

let shop3 = new Cart;
let buy3 = new Receipt;


// shop.addProduct('Book',1);
// shop.addProduct('Book',1);
// shop.addProduct('Music CD',4);
// shop.addProduct('Chocolate Bar',2);
// shop.getAllCart();
// buy.totalOfEverything(shop);

// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++');

shop2.addProduct('Imported Box of Chocolates', 6);
shop2.addProduct('Imported Bottle Perfume',10);
// shop2.getAllCart();
buy2.totalOfEverything(shop2);


console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++');

// shop3.addProduct('Imported Bottle Perfume',9);
shop3.addProduct('Bottle Perfume',5);
shop3.addProduct('Headache Medication',3);
shop3.addProduct('Imported box of chocolates',7);
shop3.addProduct('Imported box of chocolates',7);
// shop3.getAllCart();
buy3.totalOfEverything(shop3);
