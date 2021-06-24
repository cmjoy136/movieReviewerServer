const mongoose = require('mongoose')
require('dotenv').config()
const db = process.env.MONGO_URI

const connectDB = async() => {
    try {
        await mongoose.connect(
            db,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            }
        )
        console.log('Mongo is connected')
    } catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB