const moviesControllers = require('./movies.controllers');

const getAllMovies = (req, res) => {
    moviesControllers.getAllMovies()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => [
            res.status(400).json({message: err.message})
        ])
};

const postMovie = (req, res) => {
    const data = req.body;
    if(data.name && data.genre && data.duration && data.releaseDate) {
        moviesControllers.createMovie(data)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {
        res.status(400).json({message: 'Missing data'})
    }
}

const getMovieById = (req, res) => {
    const id = req.params.id;
    moviesControllers.getMovieById(id)
    .then(data => {
        if(data){ //? Si data retorna algo diferente a un null, se ejecuta ok 
        res.status(200).json(data)
        } else{//? Si data retorna un null, se ejecuta error con Invalid ID
            res.status(404).json({message: 'Invalid ID'})
        }
    })
    .catch(err => {
        res.status(404).json({message: err.message})
    })
}

const patchMovie = (req, res) => {
    const id = req.params.id;
    const { name, genre, duration, releaseDate} = req.body;
    moviesControllers.editMovie(id, {name, genre, duration, releaseDate})
        .then(response => {
            if(response[0]){ //? Si el response que retrorna el controlador tiene algo diferente de vacío se ejecuta
            res.status(200).json({
                message: `Movie with id: ${id} updated sucessufully`
            })
            } else {//? Si el response que retrorna el controlador es vacío se ejecuta el error porque no se modifico ningun ID
                res.status(400).json({
                    message: 'Invalid ID'
                })
            } 
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const deleteMovie = (req, res) => {
    const id = req.params.id;
    moviesControllers.deleteMovie(id)
        .then(response => {
            if(response) {
                res.status(204).json(response)
            } else {
                res.status(400).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports = {
    getAllMovies, 
    postMovie, 
    getMovieById,
    patchMovie,
    deleteMovie
}