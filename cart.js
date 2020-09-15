'use strict';

const data = require('./data/store.json');


class Cart {
  constructor(){
    this.cart = [];
  }

  addProduct(item, id){
    let getOne = data.filter(data => data.item === item && data.id === id);
    this.cart.push(getOne);
    this.cart.flat(1);
    this.cart = this.cart.flat();
  }

  removeProduct(item, id){
    this.cart = this.cart.filter(cart => cart.item !== item && cart.id !== id);
  }

  getAllCart(){
    let map = {};
    let result = [];
    this.cart.forEach(function(a){
      if(!map[a.id]){
        map[a.id] = {
          'item' : a.item,
          'id': a.id,
          'price': a.price,
          'catagory':a.catagory,
          'taxType':a.taxType,
          'count' : 0,
        };
        result.push(map[a.id]);
      }
      map[a.id].count++;
    });
    this.cart = result;
    console.log('This your cart:', this.cart);
  }

  removeAllCart(){
    // cart.length = 0;
    console.log('Cart is empty');
  }

  totalOfEverythingAndSaleTax(){
    let total = 0;
    let totalsalestax = 0;
    for (const item of this.cart) {

      if (item.taxType === 'except' && item.count <= 1 ){
        total += item.price;
        console.log( `${item.item}: $${item.price}` );
      }
      if (item.taxType === 'except' && item.count > 1){
        total += item.price * item.count;
        console.log( `${item.item}: $${total} (${item.count} @ $${item.price})` );
      }

      if(item.taxType === 'basic' && item.count <= 1){
        let saleTax = item.price * .10;
        let itemPlusTax = item.price + saleTax;
        totalsalestax += saleTax;
        total += itemPlusTax;
        console.log( `${item.item}: $${itemPlusTax.toFixed(2)}` );
      }
      if (item.taxType === 'basic' && item.count > 1){
        let saleTax = (item.price * .10) * item.count;
        let itemsPlusTax = (item.price * item.count) + saleTax;
        let oneItemPlus = item.price + (item.price * .10);
        totalsalestax += saleTax;
        total += itemsPlusTax;
        console.log( `${item.item}: $${itemsPlusTax.toFixed(2)} (${item.count} @ $${oneItemPlus.toFixed(2)})` );
      }


      if(item.taxType === 'import' && item.catagory === 'Food' && item.count <= 1){
        let saleTax = item.price * .05;
        let itemPlusTax = item.price + saleTax;
        totalsalestax += saleTax;
        total += itemPlusTax;
        console.log( `${item.item}: $${itemPlusTax.toFixed(2)}` );;
      }
      if (item.taxType === 'import' && item.catagory === 'Food' && item.count > 1){
        let saleTax = (item.price * .05) * item.count;
        let itemsPlusTax = (item.price * item.count) + saleTax;
        let oneItemPlus = item.price + (item.price * .05);
        totalsalestax += saleTax;
        total += itemsPlusTax;
        console.log( `${item.item}: $${itemsPlusTax.toFixed(2)} (${item.count} @ $${oneItemPlus.toFixed(2)})`);
      }



      if(item.taxType === 'import' && item.catagory !== 'Food' && item.count <= 1 ){
        let saleTax = item.price * .15;
        let itemPlusTax = item.price + saleTax;
        totalsalestax += saleTax;
        total += itemPlusTax ;
        console.log( `${item.item}: $${Math.ceil(itemPlusTax * 100) / 100}` );
      }
      if (item.taxType === 'import' && item.catagory !== 'Food' && item.count > 1){
        let saleTax = (item.price * .05) * item.count;
        let itemsPlusTax = (item.price * item.count) + saleTax;
        let oneItemPlus = item.price + (item.price * .05);
        totalsalestax += saleTax;
        total += itemsPlusTax;
        console.log( `${item.item}: $${itemsPlusTax.toFixed(2)} (${item.count} @ $${oneItemPlus.toFixed(2)})` );
      }


    }
    console.log(`Sales Tax: $${Math.ceil(totalsalestax * 20) / 20}`);
    console.log(`Total: $${Math.ceil(total * 100) / 100}`);
  };

};

module.exports = {Cart:Cart,};