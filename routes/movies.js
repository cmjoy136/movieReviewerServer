const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie')

// test router GET
router.get('/test', (req, res) => res.send('movie route testing'))

// get route all movies
router.get('/movies', (req, res)=> {
    Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({ err }))
})

// route get movie id
router.get('/movies/:id', (req, res)=>{
    Movie.findById(req.params.id)
    .then(movie =>res.json(movie))
    .catch(err=> res.status(404).json({ err}))
})

// save movie to db
router.post('/movies', (req,res)=> {
    if(req.body){
        let movie = new Movie(req.body)
        console.log(req.body)
        movie.save()
        .then(movie => res.status(201).json(movie))
        .catch(err => res.status(400).json({ err }))
    }
})

// maybe delete movie request?
router.delete('/movies/:id', (req, res, next)=>{
    const id = req.params.id
    Movie.findByIdAndRemove(id)
    .then(removed => {
        if(removed){
            res.status(204).end()
            res.redirect('/')
        } else{
            res.status(404).json({ msg: 'not found'})
        }
    })
    .catch(err => {
        res.status(500).json({ err})
    })
})

module.exports = router