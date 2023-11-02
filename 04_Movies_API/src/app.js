const express = require('express');
const db = require('./utils/databse');
const initModels = require('./models/initModels');
const moviesRouter = require('./movies/movies.router');

const app = express();
const config = require('./config.js');

db.authenticate()
    .then(() => console.log('DB Authentication Succesfully'))
    .catch(err => console.log(err));

db.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err));

initModels();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
})

app.use('/movies', moviesRouter)

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});