const Player = require('../models/sports.models');

module.exports = {
    find: (request,response) => {
        Player.find({})
        .then(displayPlayer => response.json(displayPlayer))
        .catch(error => response.json(error))
    },

    create: (request,response) => {
        Player.create(request.body)
        .then(player => response.json(player))
        .catch(error => response.status(400).json(error))
    },

    findOne: (request,response) => {
        Player.findOne({_id:request.params.id})
        .then(findOnePlayer => response.json(findOnePlayer))
        .catch(error => response.json(error))
    },

    update: (request,response) => {
        Player.findByIdAndUpdate({_id:request.params.id}, request.body, {new:true})
        .then(updatePlayer => response.json(updatePlayer))
        .catch(error => response.status(400).json(error))
    },

    delete: (request,response) => {
        Player.findOneAndDelete({_id:request.params.id})
        .then(deletePlayer => response.json(deletePlayer))
        .catch(error => response.json(error))
    }
}