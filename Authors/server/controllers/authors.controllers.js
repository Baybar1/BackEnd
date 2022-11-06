const Author = require('../models/authors.models')

module.exports = {

    find: (req,res) => {
        Author.find({})
        .then(displayAuthors => res.json(displayAuthors))
        .catch(err => res.json(err))
    },

    create: (req,res) => {
        Author.create(req.body)
        .then(name => res.json(name))
        .catch(err => res.status(400).json(err))
    },

    findOne: (req,res) => {
        Author.findOne({_id:req.params.id})
        .then(findOneAuthor => res.json(findOneAuthor))
        .catch(err => res.json(err))
    },

    update: (req,res) => {
        Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updateAuthor => res.json(updateAuthor))
        .catch(err => res.status(400).json(err))
    },

    delete: (req,res) => {
        Author.findOneAndDelete({_id:req.params.id})
        .then(deleteAuthor => res.json(deleteAuthor))
        .catch(err => res.json(err))
    }
}