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

// EDIT
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else{
    res.render('places/edit', { place: places[id] })
  }
})

// Show Page Route
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else{
    res.render('places/show', { place: places[id], id })
  }
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

//UPDATE
router.put('/:id', (req, res) => {
  places[req.params.id] = req.body
  res.redirect(`/places/${req.params.id}`)
  })

// DELETE
  router.delete('/:id', (req, res) => {
     let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else{
    res.send('STUB delete places/:id')
  }
  })


module.exports = router