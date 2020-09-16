'use strict';
let Store = require('./cart');
let mockShop = new Store.Cart;
let mockShop2 = new Store.Cart;


describe('Cart function', () => {
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
describe('Reciept function', () =>{
  it('Grab the Cart and find the total',()=>{
    const everything = jest.spyOn(mockShop2,'totalOfEverythingAndSaleTax');
    mockShop2.addProduct('Book',1);
    mockShop2.addProduct('Book',1);
    mockShop2.addProduct('Music CD',4);
    mockShop2.addProduct('Chocolate Bar',2);
    mockShop2.totalOfEverythingAndSaleTax();
    expect(everything).toBeCalled();
  });
});

