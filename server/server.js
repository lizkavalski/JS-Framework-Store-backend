'use strict'
const express= require('express')
const productsRoute = require('./routes')
const app = express()

app.use(express.json())
app.use(productsRoute);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});




module.exports=app;