const uuid = require('uuid');
const Posts = require('../models/posts.models');
const Users = require('../models/users.model');
const Categories = require('../models/categories.models');


const getAllPosts = async() => {
    const data = await Posts.findAll({
        include:[ //? Making joins
            {
                model: Users 
            },
            {
                model: Categories
            }
        ],
        attributes : {
            exclude: ['createdAt', 'updatedAt', 'categoryId'] //? Exclude data to not show it
        }
    });
    return data;
};

const getPostById = async(id) => {
    const data = await Posts.findOne({
        where: {
            id
        }
    })
    return data;
};

const createPost = async(data) => {
    const newPost = await Posts.create({
        id: uuid.v4(),
        title: data.title,
        content: data.content,
        createdBy: data.userId,
        categoryId: data.categoryId
    })
    return newPost
};

const updatePost = async(id, data) => {
    const result = await Posts.update(data, {
        where: {
            id
        }
    })
    return result
};

const deletePost = async(id) => {
    const data = await Posts.destroy({
        where: {
            id
        }
    })
    return data
};



module.exports ={
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
   
}