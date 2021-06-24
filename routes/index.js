const router = require('express').Router()
const authRoute = require('./auth')
const movieRoute = require('./movies')
const reviewRoute = require('./reviews')
const userRoute = require('./users')

    router.get('*', (req, res, next)=>{
        console.log('request made to' + req.originalURL)
        return next()
    })

    router.get('/', (req, res)=> {
        res.redirect('/')
    })

    router.use('/auth', authRoute)
    router.use('/movies', movieRoute)
    router.use('/reviews',  reviewRoute)
    router.use('/users', userRoute)

module.exports = router