const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello this express server');
})

app.listen('3000');