import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema({
  critic: Boolean,
  movie: String,
  headline: String,
  text: String,
  postDate: { type: Date, default: Date.now },
  recommend: Boolean,
});

module.exports =  mongoose.Model('review', reviewSchema)