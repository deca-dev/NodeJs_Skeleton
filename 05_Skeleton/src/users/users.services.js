const usersControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    usersControllers.getAllUsers()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
};

const getUserById = (req, res) => {
    const id = req.params.id;
    usersControllers.getUserById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json(err)
        })
};

//? Create user service will be created in auth

const patchUser = (req, res) => { //? Password change will be through email request
    const id = req.params.id;
    const {firstName, lastName, phone, birthday, gender, country} = req.body; //? Only params that the user can modify (Except role, password, email, status and isVerified)
    usersControllers.updateUser(id, {firstName, lastName, phone, birthday, gender, country})
        .then(data => {
            if(data[0]) { //? Validation if update was done (controller returns an array with # of modified rows)
                res.status(200).json({message: 'User edit correctly'})
            } else {
                res.status(400).json({message: 'Invalid id'})
            }
        })
        .catch(err => {
            res.status(400).json(err.message)
        })

}