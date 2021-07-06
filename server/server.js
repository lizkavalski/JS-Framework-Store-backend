'use strict'
const express= require('express')
const productsRoute = require('./routes')
const notFound=require('./middleware/404');
const errorHandler=require('./middleware/500');
const app = express()

app.use(express.json())
app.use(productsRoute);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('*',notFound);
app.use(errorHandler);



module.exports=app;