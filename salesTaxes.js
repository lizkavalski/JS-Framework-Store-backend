'use strict';

const data = require( './data/store.json');



function getAllProduct(){
  return Object.keys(data);
}

console.log(getAllProduct(), 'this should show all the keys');




// function checkItem(product){
//   console.log(`this is the item : ${product}`);
//   if(product === data.product.name ){
//     console.log(`${product} matches ${data.product.name }`);
//   }else{
//     console.log(`${product} dose not matches ${data.product.name }`);
//   }
// }
//console.log(filterProducts('Books'), 'it works once');
