// Modules and Globals
require('dotenv').config();

const express = require('express');
const app = express();

//Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));

// Routes
// Controller
app.use('/places', require('./controllers/places'))

// Homepage
app.get('/', (req, res) => {
    res.render('home')
});

// Wildcard
app.get('*', (req, res) => {
    res.render('error404')
});


//Listen for Connections
app.listen(process.env.PORT);

