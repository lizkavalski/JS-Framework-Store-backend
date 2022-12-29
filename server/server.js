'use strict'
const express= require('express');
const productRoute = require('./routes/productRoutes');
const categoryRoute = require('./routes/categoryRoutes');
const notFound=require('./middleware/404');
const errorHandler=require('./middleware/500');
const app = express();

app.use(express.json());
app.use(productRoute);
app.use(categoryRoute);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('*',notFound);
app.use(errorHandler);



module.exports=app;