const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const { Schema } = mongoose;

let salt = bcrypt.genSaltSync(10)

const userSchema = new Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  critic: { type: Boolean },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});

module.exports = mongoose.model("user", userSchema);
