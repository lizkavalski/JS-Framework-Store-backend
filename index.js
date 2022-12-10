'use strict'
require('dotenv').config();
const app =require('./server/server');
const port = process.env.PORT;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("Store").collection("category","product");
  // perform actions on the collection object
  client.close();
});


app.listen(port, () => {
  console.log(`The port is listening ${port}`);
});