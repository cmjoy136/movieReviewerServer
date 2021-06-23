const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/',(req, res)=> {
    res.send('Heyo wassup')
})

app.listen(apiPort, () =>  console.log(`using ${port} currently`))