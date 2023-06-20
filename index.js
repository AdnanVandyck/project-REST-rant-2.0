require('dotenv').config();

const express = require('express');
const app = express();

// Routes

app.use('/places', require('./controllers/places'))

// Homepage
app.get('/', (req, res) => {
    res.send('Peace World!')
});

// Wildcard
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
});

app.listen(process.env.PORT);

