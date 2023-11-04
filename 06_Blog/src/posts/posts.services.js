const postControllers = require('./posts.controllers')


const getAllPosts = (req, res) => {
    postControllers.getAllPosts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getPostById = (req, res) => {
    const id = req.params.id;
    postControllers.getPostById(id)
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
}

const createPost = (req, res) => {
    console.log("De Service Createpost:", req.user)
    const userId = req.user.id;
    const {title, content, categoryId} = req.body;
    if(title && content && categoryId) {
        postControllers.createPost({title, content, userId, categoryId})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({message: 'Missing data', fields: {
            title: 'String',
            content: 'String',
            categoryId: 'integer'
        }})
    }
}

const updatePost = (req, res) => {
    

}

module.exports = {
    getAllPosts,
    getPostById,
    createPost
}