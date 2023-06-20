require('dotenv').config();

const express = require('express');
const app = express();

// Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Routes
// Controller
app.use('/places', require('./controllers/places'))

// Homepage
app.get('/', (req, res) => {
    res.render('home')
});

// Wildcard
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
});

app.listen(process.env.PORT);

