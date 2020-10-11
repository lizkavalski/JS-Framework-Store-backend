'use strict';
const Cart = require('../cart/cart');

class Receipt extends Cart{
  constructor() {
    super();
    this.getAllCart();
  }
  checkForExempt(item){
    let total = 0;
    if ((item.taxType === 'except') && (item.count <= 1) ){
      total += Math.ceil(item.price * 100) / 100;
      // console.log( `${item.item}: $${item.price}` );
    }
    if ((item.taxType === 'except') && (item.count > 1)){
      let items = item.price * item.count;
      total += Math.ceil(items * 100 ) / 100 ;
      // console.log( `${item.item}: $${items} (${item.count} @ $${item.price})` );
    }
    return total;
  }
  printForExempt(item){
    if ((item.taxType === 'except') && (item.count <= 1) ){
      // total += Math.ceil(item.price * 100) / 100;
      return `${item.item}: $${Math.ceil(item.price * 100) / 100}` ;
    }
    if ((item.taxType === 'except') && (item.count > 1)){
      let items = item.price * item.count;
      // total += Math.ceil(items * 100 ) / 100 ;
      return `${item.item}: $${Math.ceil(items * 100 ) / 100} (${item.count} @ $${item.price})` ;
    }
  }
  checkForBasic(item){
    let total = 0;
    if(item.taxType === 'basic' && item.count <= 1){
      let saleTax = item.price * .10;
      let itemPlusTax = item.price + saleTax;
      total += Math.ceil(itemPlusTax * 100) / 100;
      // console.log( `${item.item}: $${itemPlusTax.toFixed(2)}` );
    }
    if (item.taxType === 'basic' && item.count > 1){
      let saleTax = (item.price * .10) * item.count;
      let itemsPlusTax = (item.price * item.count) + saleTax;
      let oneItemPlus = item.price + (item.price * .10);
      total += Math.ceil(itemsPlusTax * 100) / 100;
      // console.log( `${item.item}: $${itemsPlusTax.toFixed(2)} (${item.count} @ $${oneItemPlus.toFixed(2)})` );
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
  printForBasic(item){
    if(item.taxType === 'basic' && item.count <= 1){
      let saleTax = item.price * .10;
      let itemPlusTax = item.price + saleTax;
      let total = Math.ceil(itemPlusTax * 100) / 100;
      return `${item.item}: $${total.toFixed(2)}` ;
    }
    if (item.taxType === 'basic' && item.count > 1){
      let saleTax = (item.price * .10) * item.count;
      let itemsPlusTax = (item.price * item.count) + saleTax;
      let oneItemPlus = item.price + (item.price * .10);
      let total = Math.ceil(itemsPlusTax * 100) / 100;
      console.log( `${item.item}: $${total.toFixed(2)} (${item.count} @ $${oneItemPlus.toFixed(2)})` );
    }
  }
  checkForImportFood(item){
    let total = 0;
    if(item.taxType === 'import' && (item.catagory === 'Food' || item.catagory === 'books' || item.catagory === 'Medical')  && item.count <= 1){
      let saleTax = item.price * .05;
      let itemPlusTax = item.price + saleTax;
      total += Math.ceil(itemPlusTax * 100) / 100;
      console.log( `${item.item}: $${itemPlusTax.toFixed(2)}` );
    }
    if (item.taxType === 'import' && (item.catagory === 'Food' || item.catagory === 'books' || item.catagory === 'Medical') && item.count > 1){
      let saleTax = Math.ceil((item.price * .05) * 10) / 10;
      let saleTaxMore = Math.ceil(saleTax * 100) / 100 * item.count;
      let itemsPlusTax = (item.price * item.count) + saleTaxMore;
      let oneItemPlus = item.price + saleTax;
      total += Math.ceil(itemsPlusTax * 100) / 100;
      console.log( `${item.item}: $${itemsPlusTax.toFixed(2)} (${item.count} @ $${oneItemPlus.toFixed(2)})` );
    }
    return total;
  }
  checkSaleTaxforImportedFood(item){
    let totalSaleTax = 0;
    if(item.taxType === 'import' && (item.catagory === 'Food' || item.catagory === 'books' || item.catagory === 'Medical') && item.count <= 1){
      let saleTax = item.price * .05;
      totalSaleTax += Math.ceil(saleTax * 20) / 20;
    }
    if (item.taxType === 'import' && (item.catagory === 'Food' || item.catagory === 'books' || item.catagory === 'Medical') && item.count > 1){
      let saleTax = Math.ceil((item.price * .05) * 20) / 20;
      let saleTaxMore = Math.ceil(saleTax * 20) / 20 * item.count;
      totalSaleTax += saleTaxMore;
    }
    return totalSaleTax;
  }
  checkForImportNotFood(item){
    let total = 0;
    if(item.taxType === 'import' && (item.catagory !== 'Food' && item.catagory !== 'books' &&  item.catagory !== 'Medical') && item.count <= 1 ){
      let saleTax = Math.ceil((item.price * .15) * 20) / 20;
      let itemPlusTax = item.price + saleTax;
      total += Math.ceil(itemPlusTax * 100) / 100;
      console.log( `${item.item}: $${itemPlusTax.toFixed(2)}` );
    }
    if (item.taxType === 'import' && (item.catagory !== 'Food' && item.catagory !== 'books' &&  item.catagory !== 'Medical') && item.count > 1){
      let saleTax = Math.ceil((item.price * .15) * 20) / 20;
      let saleTaxMore = Math.ceil(saleTax * 100) / 100 * item.count;
      let itemsPlusTax = (item.price * item.count) + saleTaxMore;
      let oneItemPlus = item.price + saleTax;
      total += Math.ceil(itemsPlusTax * 100) / 100;
      console.log( `${item.item}: $${Math.ceil(itemsPlusTax * 100) / 100} (${item.count} @ $${Math.ceil(oneItemPlus * 100) / 100})` );
    }
    return total;
  }
  checkSaleTaxforImportedNotFood(item){
    let totalSaleTax = 0;
    if(item.taxType === 'import' && (item.catagory !== 'Food' && item.catagory !== 'books' && item.catagory !== 'Medical') && item.count <= 1){
      let saleTax = item.price * .15;
      totalSaleTax += Math.ceil(saleTax * 20) / 20;
    }
    if (item.taxType === 'import' && (item.catagory !== 'Food' && item.catagory !== 'books' &&  item.catagory !== 'Medical') && item.count > 1){
      let saleTax = Math.ceil((item.price * .15) * 20) / 20;
      let saleTaxMore = Math.ceil(saleTax * 20) / 20 * item.count;
      totalSaleTax += saleTaxMore;
    }
    return totalSaleTax;
  }
  printEverything(cart){
    for(const item of cart.getAllCart()){
      this.printForExempt(item);
      this.printForBasic(item);

    }
  }
  totalofEverythingSaleTax(cart){
    let saleTax = 0;
    for (const item of cart.getAllCart()) {
      saleTax += this.checkSaleTaxforBasic(item);
      saleTax += this.checkSaleTaxforImportedFood(item);
      saleTax += this.checkSaleTaxforImportedNotFood(item);
    }
    console.log( `Sale Tax: $${saleTax.toFixed(2)}`);
  }
  totalOfEverything(cart){
    let total = 0;
    for (const item of cart.getAllCart()) {
      total += this.checkForExempt(item);
      total += this.checkForBasic(item);
      total += this.checkForImportFood(item);
      total += this.checkForImportNotFood(item);
    }
    console.log(this.printEverything(cart));
    this.totalofEverythingSaleTax(cart);
    return `Total: $${total.toFixed(2)}`;
  };

};
module.exports = Receipt;