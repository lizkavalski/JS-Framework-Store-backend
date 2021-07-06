// const data = require('../data/store.json');
const express=require('express');
const storeModel= require('./models/schema');
const Collection= require('./models/dataModels');
const store = new Collection(storeModel);

const router=express.Router();

router.get('/', (req, res) => {res.send('Welcome!');});
router.get('/products', getAllItems );
router.get('/products/:_id', getOneItem);
router.post('/products', createNewItem);
router.put('/products/:_id',updateItem);
router.delete('/products/:id', deleteItem)

async function getAllItems(req,res){
  let allItem = await store.get()
  res.status(200).json(allItem)
}
async function getOneItem(req, res){
  const id = req.params._id;
  let oneItem =await store.get(id)
  res.status(200).json(oneItem);
}
async function createNewItem(req,res){
  let obj =req.body;
  let newItem=await store.create(obj);
  console.log('this is the new item:',newItem)
  res.status(200).json(newItem);
}
async function updateItem(req,res){
  const id = req.params.id;
  const obj = req.body;
  console.log('this is obj', obj)
  let updatedItem = await store.update(id, obj)
  res.status(200).json(updatedItem);
}
async function deleteItem(req, res) {
  let id = req.params.id;
  let deletedItem = await store.delete(id);
  res.status(200).json({msg:'item has been deleted', deletedItem});
}

module.exports = router;