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
    return 'This your cart:', this.cart;
  }

  removeAllCart(){
    // cart.length = 0;
    return 'Cart is empty';
  }

  totalOfEverythingAndSaleTax(){
    let total = 0;
    let totalsalestax = 0;
    for (const item of this.cart) {

      if (item.taxType === 'except' && item.count <= 1 ){
        total += Math.ceil(item.price * 100) / 100;
        console.log( `${item.item}: $${item.price}` );
      }
      if (item.taxType === 'except' && item.count > 1){
        let items = item.price * item.count;
        total += Math.ceil(items * 100 ) / 100 ;
        console.log( `${item.item}: $${total} (${item.count} @ $${item.price})` );
      }

      if(item.taxType === 'basic' && item.count <= 1){
        let saleTax = item.price * .10;
        let itemPlusTax = item.price + saleTax;
        totalsalestax += saleTax;
        total += Math.ceil(itemPlusTax * 100) / 100;
        console.log( `${item.item}: $${itemPlusTax.toFixed(2)}` );
      }
      if (item.taxType === 'basic' && item.count > 1){
        let saleTax = (item.price * .10) * item.count;
        let itemsPlusTax = (item.price * item.count) + saleTax;
        let oneItemPlus = item.price + (item.price * .10);
        totalsalestax += saleTax;
        total += Math.ceil(itemsPlusTax * 100) / 100;
        console.log( `${item.item}: $${itemsPlusTax.toFixed(2)} (${item.count} @ $${oneItemPlus.toFixed(2)})` );
      }


      if((item.taxType === 'import' && item.catagory === 'Food') && item.count <= 1){
        let saleTax = item.price * .05;
        let itemPlusTax = item.price + saleTax;
        console.log('this is item plus tax', itemPlusTax)
        totalsalestax += saleTax;
        total += Math.ceil(itemPlusTax * 100) / 100;
        console.log( `${item.item}: $${itemPlusTax.toFixed(2)}` );
      }
      if ((item.taxType === 'import' && item.catagory === 'Food') && item.count > 1){
        let saleTax = (item.price * .05) * item.count;
        let itemsPlusTax = (item.price * item.count) + saleTax;
        let oneItemPlus = item.price + (item.price * .05);
        totalsalestax += saleTax;
        total += Math.ceil(itemsPlusTax * 100) / 100;
        console.log( `${item.item}: $${itemsPlusTax.toFixed(2)} (${item.count} @ $${oneItemPlus.toFixed(2)})` );
      }

      if((item.taxType === 'import' && item.catagory !== 'Food') && item.count <= 1 ){
        let saleTax = item.price * .15;
        let itemPlusTax = item.price + saleTax;
        console.log('this is item plus tax', itemPlusTax);
        totalsalestax += saleTax;
        total += Math.ceil(itemPlusTax * 100) / 20;
        console.log( `${item.item}: $${itemPlusTax.toFixed(2)}` );
      }
      if (item.taxType === 'import' && item.catagory !== 'Food' && item.count > 1){
        let saleTaxOneItem = item.price * .15;
        let saleTax = saleTaxOneItem * item.count;
        let itemsPlus = item.price * item.count;
        let itemsPlusTax = itemsPlus + saleTax;
        let oneItemPlus = item.price + (item.price * .15);
        totalsalestax += saleTax;
        total += Math.ceil(itemsPlusTax * 100) / 100;
        console.log( `${item.item}: $${Math.ceil(itemsPlusTax * 100) / 100} (${item.count} @ $${Math.ceil(oneItemPlus * 100) / 100})` );
      }


      console.log(`Sales Tax: $${Math.ceil(totalsalestax * 20) / 20}`);
    }
    console.log(`Total: $${total.toFixed(2)}`);
  };

};

module.exports = {Cart:Cart,};