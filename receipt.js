'use strict';
const Cart = require('./cart');

class Receipt extends Cart{
  constructor() {
    super();
    this.getAllCart();
  }
  checkForExempt(item){
    let total = 0;
    if ((item.taxType === 'except') && (item.count <= 1) ){
      total += Math.ceil(item.price * 100) / 100;
      console.log( `${item.item}: $${item.price}` );
    }
    if ((item.taxType === 'except') && (item.count > 1)){
      let items = item.price * item.count;
      total += Math.ceil(items * 100 ) / 100 ;
      console.log( `${item.item}: $${total} (${item.count} @ $${item.price})` );
    }
    return total;
  }
  checkForBasic(item){
    let total = 0;
    if(item.taxType === 'basic' && item.count <= 1){
      let saleTax = item.price * .10;
      let itemPlusTax = item.price + saleTax;
      total += Math.ceil(itemPlusTax * 100) / 100;
      console.log( `${item.item}: $${itemPlusTax.toFixed(2)}` );
    }
    if (item.taxType === 'basic' && item.count > 1){
      let saleTax = (item.price * .10) * item.count;
      let itemsPlusTax = (item.price * item.count) + saleTax;
      let oneItemPlus = item.price + (item.price * .10);
      total += Math.ceil(itemsPlusTax * 100) / 100;
      console.log( `${item.item}: $${itemsPlusTax.toFixed(2)} (${item.count} @ $${oneItemPlus.toFixed(2)})` );
    }
    return total;
  }
  checkForImportFood(item){
    let total = 0;
    if((item.taxType === 'import' && item.catagory === 'Food') && item.count <= 1){
      let saleTax = item.price * .05;
      let itemPlusTax = item.price + saleTax;
      total += Math.ceil(itemPlusTax * 100) / 100;
      console.log( `${item.item}: $${itemPlusTax.toFixed(2)}` );
    }
    if ((item.taxType === 'import' && item.catagory === 'Food') && item.count > 1){
      let saleTax = (item.price * .05) * item.count;
      let itemsPlusTax = (item.price * item.count) + saleTax;
      let oneItemPlus = item.price + (item.price * .05);
      total += Math.ceil(itemsPlusTax * 100) / 100;
      console.log( `${item.item}: $${itemsPlusTax.toFixed(2)} (${item.count} @ $${oneItemPlus.toFixed(2)})` );
    }
    return total;
  }

  checkForImportNotFood(item){
    let total = 0;
    if((item.taxType === 'import' && item.catagory !== 'Food') && item.count <= 1 ){
      let saleTax = item.price * .15;
      let itemPlusTax = item.price + saleTax;
      total += Math.ceil(itemPlusTax * 100) / 100;
      console.log( `${item.item}: $${itemPlusTax.toFixed(2)}` );
    }
    if (item.taxType === 'import' && item.catagory !== 'Food' && item.count > 1){
      let saleTaxOneItem = item.price * .15;
      let saleTax = saleTaxOneItem * item.count;
      let itemsPlus = item.price * item.count;
      let itemsPlusTax = itemsPlus + saleTax;
      let oneItemPlus = item.price + (item.price * .15);
      total += Math.ceil(itemsPlusTax * 100) / 100;
      console.log( `${item.item}: $${Math.ceil(itemsPlusTax * 100) / 100} (${item.count} @ $${Math.ceil(oneItemPlus * 100) / 100})` );
    }
    return total;
  }

  totalOfEverything(cart){
    let total = 0;
    for (const item of cart.getAllCart()) {
      total += this.checkForExempt(item);
      total += this.checkForBasic(item);
      total += this.checkForImportFood(item);
      total += this.checkForImportNotFood(item);
    }
    console.log(`Total: $${total.toFixed(2)}`);
  };

};
module.exports = Receipt;