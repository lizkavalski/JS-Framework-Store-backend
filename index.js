'use strict'
require('dotenv').config();
const app =require('./server/server');
const mongoose= require('mongoose');
const port = process.env.PORT;
const setting= {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}


mongoose.connect(process.env.MONGODB_URL, setting);

app.listen(port, () => {
  console.log(`The port is listening ${port}`);
});