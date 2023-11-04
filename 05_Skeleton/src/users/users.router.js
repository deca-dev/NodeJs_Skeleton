const usersServices = require('./users.services')
const router = require('express').Router()
const passport = require('passport');

require('../middlewares/auth.middleware')(passport)

//? Main Route

router.get('/',usersServices.getAllUsers);

//? Routes for each user
router.route('/me')
    .get(passport.authenticate('jwt', {session:false}),
    usersServices.getMyUser)
    .patch()
    .delete()

//? Dynamic Routes by Id
router.route('/:id')
    .get(usersServices.getUserById)
    .patch(usersServices.patchUser)
    .delete(usersServices.deleteUser)


module.exports = router