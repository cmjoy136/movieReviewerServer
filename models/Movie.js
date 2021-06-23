import mongoose from 'mongoose'
const {Schema} = mongoose

const MovieSchema = new Schema({
    title: String,
    tmdbID: String,
    overview: String,
    posterPath: String,
    releaseDate: String
})

module.exports = mongoose.model('movie', MovieSchema)