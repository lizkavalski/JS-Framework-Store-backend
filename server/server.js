'use strict'
const express= require('express')
const Products = require('./middleware')
const app = express()
let products = new Products()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.get('/products', (req, res)=>{
  products.getAllItems(req, res)
});
app.get('/products/:id', (req,res)=>{
  products.getOneItem(req,res)
})

module.exports=app;