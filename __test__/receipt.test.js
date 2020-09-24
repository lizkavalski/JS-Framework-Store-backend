'use strict';
let Cart = require('../cart/cart');
let Receipt = require('../receipt/receipt')
let mockShop = new Cart;
let mockReceit = new Receipt;

describe('Receipt Class', () => {
  it('it can check if item it exempt', () =>{
    const addItem = jest.spyOn(mockReceit, 'checkForExempt');
    mockShop.addProduct('Book', 1);
    mockShop.addProduct('Chocolate Bar',2);
    mockReceit.totalOfEverything(mockShop);
    expect(addItem).toBeCalled();
  });
});

