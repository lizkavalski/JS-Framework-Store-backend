
'use strict';

const Cart = require('./cart/cart');
const Receipt = require('./receipt/receipt');

let shop = new Cart;
let buy = new Receipt;

let shop2 = new Cart;
let buy2 = new Receipt;

let shop3 = new Cart;
let buy3 = new Receipt;

let shop4 = new Cart;
let buy4 = new Receipt;


shop.addProduct('Book',1);
shop.addProduct('Book',1);
shop.addProduct('Music CD',4);
shop.addProduct('Chocolate Bar',2);
buy.totalOfEverything(shop);

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++');

shop2.addProduct('Imported Box of Chocolates', 6);
shop2.addProduct('Imported Bottle Perfume',10);
buy2.totalOfEverything(shop2);


console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++');

shop3.addProduct('Imported Bottle Perfume',9);
shop3.addProduct('Bottle Perfume',5);
shop3.addProduct('Headache Medication',3);
shop3.addProduct('Imported box of chocolates',7);
shop3.addProduct('Imported box of chocolates',7);
buy3.totalOfEverything(shop3);

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++');

shop4.addProduct('Imported Book', 11);
shop4.addProduct('Imported Meds', 12);
buy4.totalOfEverything(shop4);