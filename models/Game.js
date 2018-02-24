const
    mongoose = require('mongoose')

    gameSchema = new mongoose.Schema({
        name: { type: String },
        location: { type: String },
        date: { type: String },
        time: { type: String }
    })


    const Game = mongoose.model('Game', gameSchema)
    module.exports = Game 