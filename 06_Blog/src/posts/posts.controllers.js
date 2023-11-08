const uuid = require('uuid');
const Posts = require('../models/posts.models');
const Users = require('../models/users.model');
const Categories = require('../models/categories.models');


const getAllPosts = async(offset, limit) => {
    const data = await Posts.findAndCountAll({
        offset: offset,
        limit: limit,
        include:[ //? Making joins
            {
                model: Users,
                attributes: {
                    exclude: ['password','updatedAt', 'createdAt', 'role', 'phone']
                }
            },
            {
                model: Categories
            }
        ],
        attributes : {
            exclude: ['createdAt', 'updatedAt', 'categoryId','userId'] //? Exclude data to not show it
        }
    });
    return data;
};

const getPostById = async(id) => {
    const data = await Posts.findOne({
        where: {
            id
        },
        include:[ //? Making joins
            {
                model: Users,
                attributes: {
                    exclude: ['password','updatedAt', 'createdAt', 'role', 'phone']
                }
            },
            {
                model: Categories
            }
        ],
        attributes : {
            exclude: ['createdAt', 'updatedAt', 'categoryId','userId'] //? Exclude data to not show it
        }
    })
    return data;
};

const createPost = async(data) => {
    const newPost = await Posts.create({
        id: uuid.v4(),
        title: data.title,
        content: data.content,
        userId: data.userId,
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

const getPostsByCategory = async (categoryId) => {
    const data = await Posts.findAll({
        where: {
            categoryId
        }
    })
    return data
}


module.exports ={
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    getPostsByCategory
}