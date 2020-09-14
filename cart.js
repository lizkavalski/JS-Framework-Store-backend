'use strict';

const data = require('./data/store.json');

let cart = [] ;

class Cart {
  addProduct(item, id){
    let getOne = data.filter(data => data.item === item && data.id === id);
    cart.push(getOne);
    cart.flat(1);
    cart = cart.flat();
  }
  removeProduct(item, id){
    cart = cart.filter(cart => cart.item !== item && cart.id !== id);
  }
  getAllCart(){
    let map = {};
    let result = [];
    cart.forEach(function(a){
      if(!map[a.id]){
        map[a.id] = {
          'item' : a.item,
          'id': a.id,
          'price': a.price,
          'catagory':a.catagory,
          'taxType':a.taxType,
          'count' : 0,
        },
        result.push(map[a.id]);
      }
      map[a.id].count++;
    });
    cart = result;
    console.log('This your cart:', cart);
  }
  removeAllCart(){
    // cart.length = 0;
    console.log('Cart is empty');
  }

};


class Receipt{
  totalOfEverythingAndSaleTax(){
    let total = 0;
    let totalsalestax = 0;
    for (const item of cart) {
      if (item.taxType === 'except' && item.count <= 1 ){
        total += item.price;
        console.log( `${item.item}: $${item.price}` );
      }
      if (item.taxType === 'except' && item.count > 1){
        total += item.price * item.count;
        console.log( `${item.item}: $${total} (@ $${item.price})` );
      }
      if(item.taxType === 'basic' && item.count <= 1){
        total += item.price + (item.price * .10);
        totalsalestax += item.price * .10;
        let saleTax = item.price * .10;
        let itemPlusTax = item.price + saleTax;
        console.log( `${item.item}: $${itemPlusTax.toFixed(2)} ` );
      }
      if(item.taxType === 'import' && item.catagory === 'Food'){
        total += item.price + (item.price * .05);
        totalsalestax += item.price * .05;
        let saleTax = item.price * .05;
        let itemPlusTax = item.price + saleTax;
        console.log( `${item.item}: $${Math.ceil(itemPlusTax.toFixed(2) * 100) / 100} ` );
      }
      if(item.taxType === 'import' && item.catagory !== 'Food'){
        totalsalestax += item.price * .15;
        total += item.price + (item.price * .15);
        let saleTax = item.price * .15;
        let itemPlusTax = item.price + saleTax;
        console.log( `${item.item}: $${Math.ceil(itemPlusTax.toFixed(2) * 100) / 100}` );
      }
    }
    console.log(`Sales Tax: $${Math.ceil(totalsalestax.toFixed(2) * 100) / 100}`);
    console.log(`Total: $${total.toFixed(2)}`);
  };

};


module.exports = {Cart:Cart, Receipt:Receipt,};