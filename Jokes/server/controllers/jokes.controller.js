
const Joke = require('../models/jokes.model')


module.exports.findAllJokes = (req,res) => {
    Joke.find({})
        .then((allJokes) => {
            res.json({joke: allJokes})
        })
        .catch((err) => {
            res.json(err)
        })
    
}


module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id: req.params.id})
        .then((oneJoke) => {
            res.json({joke: oneJoke})
        })
        .catch((err) => {
            res.json(err)
        })
    
}


module.exports.createNewJoke = (req,res) => {
    Joke.create(req.body)
        .then((newJoke) => {
            res.status(201).json({joke: newJoke})
        })
        .catch((err) => {
            res.json(err)
        })
    
}


module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updateJoke) => {
            res.json({joke: updateJoke})
        })
        .catch((err) => {
            res.json(err)
        })
    res.json()
}


module.exports.deleteJoke = (req,res) => {
    Joke.findOneAndDelete({_id: req.params.id})
        .then((deleteJoke) => {
            res.json({joke: deleteJoke})
        })
        .catch((err) => {
            res.json(err)
        })
    res.json()
}