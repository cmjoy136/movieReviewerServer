const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const User = require('../models/User')

router.get('/test', (req, res) => res.send('user rout testing'))

//get users
router.get('/', (req, res)=> {
    User.find()
    .then(users => res.json(users))
    .catch(err=> res.status(404).json({err}))
})

// get user id
router.get('/:id', (req, res)=> {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ err}))
})


module.exports = router