'use strict'
require('dotenv').config();
const app =require('./server');
const port = process.env.PORT;
// const mongoose= require('mongoose');
// const setting= {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// }
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.listen(port, () => {
  console.log(`The port is listening ${port}`);
});