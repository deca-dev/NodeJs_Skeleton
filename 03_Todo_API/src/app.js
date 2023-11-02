const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Server Ok'})
});





app.listen(8000, () => [
    console.log('Server initialized on port 8000')
]);