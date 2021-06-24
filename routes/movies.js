const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie')

// test router GET
router.get('/test', (req, res) => res.send('movie route testing'))

// get route all movies
router.get('/', (req, res)=> {
    Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({ err }))
})

// route get movie id
router.get('/:id', (req, res)=>{
    Movie.findById(req.params.id)
    .then(movie =>res.json(movie))
    .catch(err=> res.status(404).json({ err}))
})

// save movie to db
router.post('/', (req,res)=> {
    const existingMovie = Movie.exists({title:req.body.title})
   if(!existingMovie){
        let movie = new Movie(req.body)
        movie.save()
        .then(movie => res.status(201).json(movie))
        .catch(err => res.status(400).json({ err }))
    } else{
        res.send('Movie already exists')
    }
})

//delete movie
router.delete('/:id', (req, res, next)=>{
    const id = req.params.id
    Movie.findByIdAndRemove(id)
    .then(removed => {
        if(removed){
            res.status(204).end()
        } else{
            res.status(404).json({ msg: 'not found'})
        }
    })
    .catch(err => {
        res.status(500).json({ err})
    })
})

module.exports = router