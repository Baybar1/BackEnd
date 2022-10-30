const Product = require('../model/product.model')

module.exports.everyProduct = (req,res) => {
    Product.find()
    .then((allProducts) => {
        res.json({products: allProducts})
    })
    .catch(err => {res.json(err)})
}

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
    .then((newProduct) => {
        res.json({product: newProduct})
    })
}