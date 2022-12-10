const express=require('express');
const productModel= require('../models/product/productSchema');
const Collection= require('../models/dataModels');
const product = new Collection(productModel);

const productRouter=express.Router();

productRouter.get('/', (req, res) => {res.send('Welcome!');});
productRouter.get('/products', getAllItems );
productRouter.get('/products/:id', getOneItem);
productRouter.post('/products', createNewItem);
productRouter.put('/products/:id',updateItem);
productRouter.delete('/products/:id', deleteItem)

async function getAllItems(req,res){
  let allItem = await product.get()
  res.status(200).json(allItem)
}
async function getOneItem(req, res){
  const id = req.params.id;
  let oneItem =await product.get(id)
  res.status(200).json(oneItem);
}
async function createNewItem(req,res){
  let obj =req.body;
  let newItem=await product.create(obj);
  res.status(200).json(newItem);
}
async function updateItem(req,res){
  const id = req.params.id;
  const obj = req.body;
  let updatedItem = await product.update(id, obj)
  res.status(200).json(updatedItem);
}
async function deleteItem(req, res) {
  let id = req.params.id;
  let deletedItem = await product.delete(id);
  res.status(200).json({msg:'item has been deleted', deletedItem});
}

module.exports = productRouter;