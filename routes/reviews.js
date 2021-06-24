const express = require('express')
const router = express.Router()

const Review = require('../models/Review')

router.get('/test/reviews', (req,res)=>{
    res.send('review route testing')
})

//get reviews of movie GET
// need movie id
router.get('/reviews', (req,res) => {
    Review.find()
    .then(reviews => res.json(reviews))
    .catch(err => res.status(404).json({ noreviewsfound: 'no reviews found'}))
})

//get review GET
//review id
router.get('/reviews/:id', (req, res) => {
    Review.findById(req.params.id)
    .then(review => res.json(review))
    .catch(err => res.status(404).json({err}))
})

// create review POST
// need movie id
router.post('/reviews', (req,res)=>{
if(req.body){
    let review = new Review(req.body)
    review.save()
    .then(review => res.status(200).json(review))
    .catch(err => res.status(400).json({ err}))
}
})

//edit review PUT/PATCH

//delete review DELETE

module.exports = router


