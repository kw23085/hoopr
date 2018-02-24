const
    express = require('express')
    usersRouter = new express.Router()
    usersCtrl = require('../controllers/users.js')
    verifyToken = require('../serverAuth.js').verifyToken //*new line* import the verifyTaken function

usersRouter.route('/')
    .get(usersCtrl.index)
    .post(usersCtrl.create)

usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.use(verifyToken) //*new line* All the routes after this point will need a verified token

usersRouter.route('/:id')
    .get(usersCtrl.show)
    .patch(usersCtrl.update)
    .delete(usersCtrl.destroy)

module.exports = usersRouter