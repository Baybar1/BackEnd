const Product = require('../model/product.model')

module.exports.everyProduct = (req,res) => {
    Product.find({})
    .then((allProducts) => {
        res.json( allProducts)
    })
    .catch(err => {res.json(err)})
}

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
    .then((newProduct) => {
        res.json( newProduct)
    })
}

module.exports.oneProduct = (req,res) => {
    Product.findOne({_id:req.params.id})
    .then((product) => {
        res.json(product)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
}

