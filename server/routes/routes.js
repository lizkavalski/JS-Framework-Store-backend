// const data = require('../data/store.json');
const express=require('express');
// const productModel= require('./models/productSchema');
// const categoryModel= require('./models/categorySchema');
const Collection= require('../src/models/dataModels');
// const product = new Collection(productModel);
// const category = new Collection(categoryModel);

const router=express.Router();

router.param('model', (req, res, next) => {
  const fileName = `${__dirname}/../models/${req.params.model}/model.js`;
  console.log('this is the file name', fileName)

  // This should be async ...
  if (fs.existsSync(fileName)) {
    const model = require(fileName);
    req.model = new Collection(model);
    next();
  } else {
    next("Invalid Model");
  }
});

router.get('/', (req, res) => {res.send('Welcome!');});
router.get('/:model', getAllItems );
router.get('/:model/:id', getOneItem);
router.post('/model', createNewItem);
router.put('/model/:id',updateItem);
router.delete('/model/:id', deleteItem)

async function getAllItems(req,res){
  let allItem = await store.get()
  res.status(200).json(allItem)
}
async function getOneItem(req, res){
  const id = req.params.id;
  let oneItem =await store.get(id)
  res.status(200).json(oneItem);
}
async function createNewItem(req,res){
  let obj =req.body;
  let newItem=await store.create(obj);
  res.status(200).json(newItem);
}
async function updateItem(req,res){
  const id = req.params.id;
  const obj = req.body;
  let updatedItem = await store.update(id, obj)
  res.status(200).json(updatedItem);
}
async function deleteItem(req, res) {
  let id = req.params.id;
  let deletedItem = await store.delete(id);
  res.status(200).json({msg:'item has been deleted', deletedItem});
}

module.exports = router;