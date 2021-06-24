const mongoose = require('mongoose')
const {Schema} = mongoose

const voteSchema = new Schema ({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    review: {type: Schema.Types.ObjectId, ref: 'Review'}
})

module.exports = mongoose.model("vote", voteSchema)