'use strict'
const express= require('express')
const storeRoute = require('./server/routes/routes')
const notFound=require('./server/src/middleware/404');
const errorHandler=require('./server/src/middleware/500');
const app = express()

app.use(express.json())
app.use(storeRoute);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('*',notFound);
app.use(errorHandler);



module.exports=app;