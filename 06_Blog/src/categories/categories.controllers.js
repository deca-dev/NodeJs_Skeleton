const Categories = require('../models/categories.models')

const getAllCategories = async() => {
    const data = await Categories.findAll();
    return data;
};

const getCategoryById = async(id) => {
    const data = await Categories.findOne({
        where: {
            id
        }
    })
    return data;
};

const createCategory = async(name) => {
    const newCategory = await Categories.create({name})
    return newCategory
};


module.exports ={
    getAllCategories,
    getCategoryById,
    createCategory   
}