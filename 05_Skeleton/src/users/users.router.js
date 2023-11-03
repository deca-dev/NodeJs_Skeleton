const usersServices = require('./users.services')
const router = require('express').Router()

//? Main Route

router.get('/', usersServices.getAllUsers);

//? Dynamic Routes by Id
router.route('/:id')
    .get(usersServices.getUserById)
    .patch(usersServices.patchUser)
    .delete(usersServices.deleteUser)


module.exports = router