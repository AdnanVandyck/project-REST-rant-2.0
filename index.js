// Modules and Globals
require('dotenv').config();

const express = require('express');
const app = express();
const methodOverride = require('method-override')

//Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'))

// Routes
// Controller

app.use('/places', require('./controllers/places_controller'));


// Homepage
app.get('/', (req, res) => {
    res.render('home')
});

//Show Route
app.get('/:id', (req, res) => {
    res.send('places/show')
});

// Wildcard
app.get('*', (req, res) => {
    res.render('error404')
});




//Listen for Connections
app.listen(process.env.PORT);

