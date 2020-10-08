'use strict';
let Cart = require('../cart/cart');
let Receipt = require('../receipt/receipt')
// let mockShop = new Cart;
// let mockReceit = new Receipt;

describe('Receipt Class-Exempt', () => {
  let exemptShop = new Cart;
  let exemptReceit = new Receipt;
  it('it can check the price of a item that is tax exempt', () =>{
    const addItem = jest.spyOn(exemptReceit, 'checkForExempt');
    exemptShop.addProduct('Book', 1);
    exemptShop.addProduct('Chocolate Bar',2);
    exemptShop.addProduct('Music CD',4);
    exemptReceit.totalOfEverything(exemptShop);
    expect(addItem).toBeCalled();
    console.clear(exemptReceit.totalOfEverything(exemptShop));
  });
  it('it can check the price for more then one tax exempt items ', () =>{
    const addItem = jest.spyOn(exemptReceit, 'checkForExempt');
    exemptShop.addProduct('Book',1);
    exemptReceit.totalOfEverything(exemptShop);
    expect(addItem).toBeCalled();
    console.clear(exemptReceit.totalOfEverything(exemptShop));
  });
});

describe('Receipt Class-Basic Sale Tax', () => {
  let basicShop = new Cart;
  let basicReceit = new Receipt;
  it('it can check the price is basic sale tax', () =>{
    const addItem = jest.spyOn( basicReceit, 'checkForBasic');
    basicShop.addProduct('Book', 1);
    basicShop.addProduct('Chocolate Bar',2);
    basicShop.addProduct('Music CD',4);
    basicReceit.totalOfEverything(basicShop);
    expect(addItem).toBeCalled();
  });
  it('it can check the price for more then one basic sale items ', () =>{
    const addItem = jest.spyOn( basicReceit, 'checkForBasic');
    basicShop.addProduct('Music CD',4);
    basicReceit.totalOfEverything(basicShop);
    expect(addItem).toBeCalled();
  });
});

