'use strict';

const data = require('../data/store.json');

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
    this.cart.length = 0;
    return 'Cart is empty';
  }
};

module.exports = Cart;