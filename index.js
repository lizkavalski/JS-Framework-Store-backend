
'use strict';

let Store = require('./cart');



let shop = new Store.Cart;
let look = new Store.Receipt;

shop.addProduct('Book');
shop.addProduct('Imported Bottle Perfume, Small');
shop.addProduct('Music CD');
shop.addProduct('Imported Box of Chocolates');
shop.removeProduct('Music CD');
// shop.getAllCart();
// console.log(shop.getAllCart());
// look.totalSaleTax();
// look.pricePlusTaxPerItem();
look.totalOfEverythingAndSaleTax();