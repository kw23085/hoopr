const
    express = require('express')
    gamesRouter = new express.Router()
    gamesCtrl = require('../controllers/games.js')

gamesRouter.route('/')
    .get(gamesCtrl.index)
    .post(gamesCtrl.create)


gamesRouter.route('/:id')
    .get(gamesCtrl.show)
    .patch(gamesCtrl.update)
    .delete(gamesCtrl.destroy)

module.exports = gamesRouter