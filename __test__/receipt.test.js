'use strict';
let Cart = require('../cart/cart');
let Receipt = require('../receipt/receipt')
// let mockShop = new Cart;
// let mockReceit = new Receipt;

describe('Receipt Class-Exempt', () => {
  let mockShop = new Cart;
  let mockReceit = new Receipt;
  it('it can check if item is tax exempt', () =>{
    const addItem = jest.spyOn(mockReceit, 'checkForExempt');
    mockShop.addProduct('Book', 1);
    mockShop.addProduct('Chocolate Bar',2);
    mockShop.addProduct('Music CD',4);
    mockReceit.totalOfEverything(mockShop);
    expect(addItem).toBeCalled();
  });
  it('it can check for more then one tax exempt items ', () =>{
    const addItem = jest.spyOn(mockReceit, 'checkForExempt');
    mockShop.addProduct('Book',1);
    mockShop.addProduct('Book', 1);
    mockShop.addProduct('Chocolate Bar',2);
    mockShop.addProduct('Music CD',4);
    mockReceit.totalOfEverything(mockShop);
    expect(addItem).toBeCalled();
  });
});

describe('Receipt Class-Basic Sale Tax', () => {
  let mockShop = new Cart;
  let mockReceit = new Receipt;
  it('it can check if item is basic sale tax', () =>{
    const addItem = jest.spyOn(mockReceit, 'checkForBasic');
    mockShop.addProduct('Book', 1);
    mockShop.addProduct('Chocolate Bar',2);
    mockShop.addProduct('Music CD',4);
    mockReceit.totalOfEverything(mockShop);
    expect(addItem).toBeCalled();
  });
  it('it can for more then one basic sale items ', () =>{
    const addItem = jest.spyOn(mockReceit, 'checkForBasic');
    mockShop.addProduct('Music CD',4);
    mockReceit.totalOfEverything(mockShop);
    expect(addItem).toBeCalled();
  });
});

