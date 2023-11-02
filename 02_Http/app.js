const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Haciendo un get',
        verb: req.method
    })
});

app.post('/', (req, res) => {
    res.status(200).json({
        message: 'Haciendo un post',
        verb: req.method
    })
});

app.put('/', (req, res) => {
    res.status(200).json({
        message: 'Haciendo un put',
        verb: req.method
    })
});


app.listen(9000,() => {
    console.log('Server started on port 9000');
})