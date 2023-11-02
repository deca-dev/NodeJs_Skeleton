const Movies = require('../models/movies.models');
const uuid = require('uuid')

const getAllMovies = async () => {
     const data = await Movies.findAll();
     return data;
}

const createMovie = async (data) => {
    const newMovie = await Movies.create ({
        id: uuid.v4(),
        name: data.name,
        genre: data.genre,
        duration: data.duration,
        releaseDate: data.releaseDate
    });
}

const getMovieById = async (id) => {
    const data = await Movies.findOne({
        where: {
            id
        }
    });
    return data;
}

const editMovie = async (id, data) => {
    const response = await Movies.update(data, {
        where: {
            id
        }
    })
    return response;
}

const deleteMovie = async (id) => {
    const data = await Movies.destroy({
        where: {
            id
        }
    })
    console.log(data)
    return data
}


module.exports = {
    getAllMovies,
    createMovie,
    getMovieById,
    editMovie,
    deleteMovie
}