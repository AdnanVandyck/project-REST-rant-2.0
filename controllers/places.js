const router = require('express').Router();
const places = require('..models/places.js');

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

router.get('/', (req, res) => {
    res.render('places/index', {places})
})




module.exports = router