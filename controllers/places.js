const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/noodles.jpg'
      }, {
        name: 'Coding Steakhouse',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Steakhouse',
        pic: '/images/tomahawk.jpg'
      }]
      
    res.render('places/index', {places})
})


module.exports = router