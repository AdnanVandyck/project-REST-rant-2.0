const router = require('express').Router();
const places = require('../models/places')

// Add New Place Route
router.get('/new', (req, res) => {
    res.render('places/new')
})

// Home Route
router.get('/', (req, res) => {

    res.render('places/index', {places})
})

// Show Page Route
router.get('/:id', (req,res) => {
  res.render('places/show')
  })



// Post new route
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
});



module.exports = router