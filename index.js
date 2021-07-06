'use strict'
require('dotenv').config();
const app =require('./server/server');
const mongoose= require('mongoose');
const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true,
  useUnifiedTopology: true});

app.listen(port, () => {
  console.log(`The port is listening ${port}`);
});