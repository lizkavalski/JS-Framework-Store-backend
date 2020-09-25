'use strict';
let Cart = require('../cart/cart');
let mockShop = new Cart;

describe('Cart Class', () => {
  it('Can add to the cart',() => {
    const addItem = jest.spyOn(mockShop, 'addProduct');
    mockShop.addProduct('Book', 1);
    mockShop.addProduct('Chocolate Bar',2);
    expect(addItem).toBeCalled();
  });
  it('Can remove from the cart',() => {
    const removeItem = jest.spyOn(mockShop, 'removeProduct');
    mockShop.addProduct('Book', 1);
    mockShop.removeProduct('Chocolate Bar',2);
    expect(removeItem).toBeCalled();
  });
  it('Can get all items in the Cart',() =>{
    const allItems = jest.spyOn(mockShop,'getAllCart');
    mockShop.getAllCart();
    expect(allItems).toBeCalled();
  });
  it('Can remove all items in the Cart',() =>{
    const removeItems = jest.spyOn(mockShop,'removeAllCart');
    mockShop.removeAllCart();
    expect(removeItems).toBeCalled();
  });
});


