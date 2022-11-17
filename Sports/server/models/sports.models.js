const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [true,'Player name is required'],
        minLength: [2, 'Players name must be at least 2 characters long']
    },
    playerPosition: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('Player', PlayerSchema)