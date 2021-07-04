// const data = require('../data/store.json');
const storeModel = require('./models/schema')
const Collection= require('./models/dataModels')
const store = new Collection(storeModel)

class Products {
  async getAllItems(req,res){
    let allItem = await store.get()
    res.status(200).json(allItem)
    
  };
  async getOneItem(req, res){
    const id = req.params.id;
    let oneItem=await store.get(id)
    res.status(200).json(oneItem);
  }
  async createNewItem(req,res){
    let obj =req.body;
    let newItem=await store.create(obj);
    res.status(200).json(newItem);
  }
  updateItem(req,res){

  }
};

module.exports = Products;