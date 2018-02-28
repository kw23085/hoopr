const Game = require('../models/Game.js')

module.exports = {
	// list all games
	index: (req, res) => {
		Game.find({}, (err, games) => {
			res.json(games)
		})
	},

	// get one game
	show: (req, res) => {
		console.log("Current Game:")
		console.log(req.user)
		Game.findById(req.params.id, (err, game) => {
			res.json(game)
		})
	},

	// create a new game
	create: (req, res) => {
        console.log(req.body)
		Game.create(req.body, (err, game) => {
            console.log(err)
            if(err) return res.json({success: false, code: err.code})
            
			res.json({success: true, message: "Game created.", game})
		})
	},

	// update an existing game
	update: (req, res) => {   
		Game.findById(req.params.id, (err, game) => {
			Object.assign(game, req.body)
			game.save((err, updatedGame) => {
				res.json({success: true, message: "Game updated.", game})
			})
		})
	},

	// delete an existing game
	destroy: (req, res) => {
		Game.findByIdAndRemove(req.params.id, (err, game) => {
			res.json({success: true, message: "Game deleted.", game})
		})
	},
}