const categoriesController = require('./categories.controllers')

const getAllCategories = (req, res) => {
    categoriesController.getAllCategories()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
};

const getCategoryById = (req, res) => {
    const id = req.params.id;
    categoriesController.getCategoryById(id)
        .then(data => {
            if(data) {
                res.status(200).json(data)
            } else {
                res.status(400).json({message: 'Invalid Id'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
};

const postCategory = (req, res) => {
    const {name} = req.body;
    if(name) {
        categoriesController.createCategory(name)
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({message: 'Missing data', fields: {
            name: 'string'
        }})
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    postCategory
}