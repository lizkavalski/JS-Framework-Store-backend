'use strict';
const Cart = require('./cart');

class Receipt extends Cart{
  constructor() {
    super();
    this.getAllCart();
    this.totalSale = 0;
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
      console.log( `${item.item}: $${items} (${item.count} @ $${item.price})` );
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
  checkSaleTaxforBasic(item){
    let totalSaleTax = 0;
    if(item.taxType === 'basic' && item.count <= 1){
      let saleTax = item.price * .10;
      totalSaleTax += saleTax;
    }
    if (item.taxType === 'basic' && item.count > 1){
      let saleTax = (item.price * .10) * item.count;
      totalSaleTax += saleTax;
    }
    return totalSaleTax;
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
      let saleTax = item.price * .05;
      console.log('line 63',saleTax);
      let saleTaxMore = saleTax * item.count;
      console.log('line 65',saleTaxMore);
      let itemsPlusTax = (item.price * item.count) + saleTaxMore;
      let oneItemPlus = item.price + saleTax;
      total += Math.ceil(itemsPlusTax * 100) / 100;
      console.log( `${item.item}: $${Math.ceil(itemsPlusTax.toFixed(2) * 100)/100} (${item.count} @ $${oneItemPlus.toFixed(2)})` );
    }
    return total;
  }
  checkSaleTaxforImportedFood(item){
    let totalSaleTax = 0;
    if(item.taxType === 'import' && item.catagory === 'Food' && item.count <= 1){
      let saleTax = item.price * .05;
      totalSaleTax += saleTax;
    }
    if (item.taxType === 'basic' && item.count > 1){
      let saleTax = (item.price * .05) * item.count;
      totalSaleTax += saleTax;
    }
    return totalSaleTax;
  }
  // checkForImportNotFood(item){
  //   let total = 0;
  //   if((item.taxType === 'import' && item.catagory !== 'Food') && item.count <= 1 ){
  //     let saleTax = item.price * .15;
  //     let itemPlusTax = item.price + saleTax;
  //     total += Math.ceil(itemPlusTax * 100) / 100;
  //     console.log( `${item.item}: $${itemPlusTax.toFixed(2)}` );
  //   }
  //   if (item.taxType === 'import' && item.catagory !== 'Food' && item.count > 1){
  //     let saleTaxOneItem = item.price * .15;
  //     let saleTax = saleTaxOneItem * item.count;
  //     let itemsPlus = item.price * item.count;
  //     let itemsPlusTax = itemsPlus + saleTax;
  //     let oneItemPlus = item.price + (item.price * .15);
  //     total += Math.ceil(itemsPlusTax * 100) / 100;
  //     console.log( `${item.item}: $${Math.ceil(itemsPlusTax * 100) / 100} (${item.count} @ $${Math.ceil(oneItemPlus * 100) / 100})` );
  //   }
  //   return total;
  // }

  totalOfEverything(cart){
    let total = 0;
    let saleTax = 0;
    for (const item of cart.getAllCart()) {
      total += this.checkForExempt(item);
      total += this.checkForBasic(item);
      saleTax += this.checkSaleTaxforBasic(item);
      total += this.checkForImportFood(item);
      saleTax += this.checkSaleTaxforImportedFood(item);
      // total += this.checkForImportNotFood(item);
    }
    console.log(`Sale Tax:$${saleTax.toFixed(2)}`);
    console.log(`Total: $${total.toFixed(2)}`);
  };

};
module.exports = Receipt;