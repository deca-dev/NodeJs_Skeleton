const express = require('express');
const app = express();
const {port} = require('./config')
const userRouter = require('./users/users.router')
const db = require('./utils/database')

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK!'
    })
})

app.use('/api/v1/users', userRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})