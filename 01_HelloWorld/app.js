const express = require('express');
const app = express();

app.get('/hola', (req, res) => {
    res.json ({
        message: 'Adios mundo'
    });
})

app.listen(9000, () => {
    console.log('Server started correctley')
})