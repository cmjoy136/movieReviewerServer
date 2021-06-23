const express = require('express')
const router = express.Router()

const Movie = require('../../models/Movie')

// test router GET
router.get('/test', (req, res) => res.send('movie route testing'))

// get route all movies
router.get('/', (req, res)=> {
    Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({ nomoviesfound: 'No Movies Found'}))
})

// route get movie id
router.get('/:id', (req, res)=>{
    Movie.findById(req.params.id)
    .then(movie =>res.json(movie))
    .catch(err=> res.status(404).json({ nomoviesfound: 'No Movies found'}))
})

// save movie to db
router.post('/', (req,res)=> {
    Movie.create(req.body)
    .then(movie => res.json({ msg: "Movie added successfully"}))
    .catch(err => res.status(400).json({ error: 'Unable to add book'}))
})

// maybe delete movie request?

module.exports = router