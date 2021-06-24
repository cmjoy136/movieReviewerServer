const express = require('express')
// const bodyParser = require('body-parser')
const connectDB = require('./db')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3100
const router = require('./routes/index')

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

connectDB()

app.use('/', router)

app.listen(port, () =>  console.log(`using ${port} currently`))