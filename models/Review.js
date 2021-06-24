const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  critic: Boolean,
  headline: String,
  text: String,
  postDate: { type: Date, default: Date.now },
  recommend: Boolean,
  movie: { type: Schema.Types.ObjectId, ref: "Movie"},
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("review", reviewSchema);
