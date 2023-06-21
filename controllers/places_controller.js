const router = require('express').Router();
const places = require('../models/places')

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/', (req, res) => {
    // let places = [{
    //     name: 'H-Thai-ML',
    //     city: 'Seattle',
    //     state: 'WA',
    //     cuisines: 'Thai, Pan-Asian',
    //     pic: '/images/noodles.jpg'
    //   }, {
    //     name: 'Coding Steakhouse',
    //     city: 'Phoenix',
    //     state: 'AZ',
    //     cuisines: 'Steakhouse',
    //     pic: '/images/tomahawk.jpg'
    //   }]
      
    res.render('places/index', {places})
})

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