const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')

//test
router.get('/',(req, res) => res.send('auth testing'))

// signup POST
router.post('/signup', (req, res)=> {
    const user = new User ({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password,  8)
    })

    user.save((err, user) => {
        if(err){
            res.status(500).send({ msg: err})
            return
        }
        res.send({ msg: 'user created!'})
    })
})

// signin POST
router.post('/signin', async (req,res) => {

})

module.exports = router