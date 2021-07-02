const data = require('../data/store.json');
const StoreModels = require('./models')
const store = new StoreModels()

class Products {
  getAllItems(req,res){
    let allItem = store.get()
    res.status(200).json(allItem)
    
  };
  getOneItem(req, res){
    const id = parseInt(req.params.id);
    let oneItem=store.get(id)
    res.status(200).json(oneItem);
  }
};

module.exports = Products;