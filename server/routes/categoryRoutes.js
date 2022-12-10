
const express=require('express');
const categoryModel= require('../models/category/categorySchema');
const Collection= require('../models/dataModels');
const category = new Collection(categoryModel);

const categoryRouter=express.Router();


categoryRouter.get('/', (req, res) => {res.send('Welcome!');});
categoryRouter.get('/category', getAllItems );
categoryRouter.get('/category/:id', getOneItem);
categoryRouter.post('/category', createNewItem);
categoryRouter.put('/category/:id',updateItem);
categoryRouter.delete('/category/:id', deleteItem)

async function getAllItems(req,res){
  let allItem = await category.get()
  res.status(200).json(allItem)
}
async function getOneItem(req, res){
  const id = req.params.id;
  let oneItem =await category.get(id)
  res.status(200).json(oneItem);
}
async function createNewItem(req,res){
  let obj =req.body;
  let newItem=await category.create(obj);
  res.status(200).json(newItem);
}
async function updateItem(req,res){
  const id = req.params.id;
  const obj = req.body;
  let updatedItem = await category.update(id, obj)
  res.status(200).json(updatedItem);
}
async function deleteItem(req, res) {
  let id = req.params.id;
  let deletedItem = await category.delete(id);
  res.status(200).json({msg:'item has been deleted', deletedItem});
}

module.exports = categoryRouter;