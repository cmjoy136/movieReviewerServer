const express = require('express')
// const bodyParser = require('body-parser')
const connectDB = require('./db')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3100

//routes
const movieRouter = require('./routes/movies')
const reviewRouter = require('./routes/reviews')

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

connectDB()

app.get('/',(req, res)=> {
    res.send('Heyo wassup')
})
app.use('/api', movieRouter)
// app.use('/api', reviewRouter)

app.listen(port, () =>  console.log(`using ${port} currently`))