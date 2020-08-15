const mongoose = require('mongoose')

const { Schema } = mongoose

const phoneSchema = new Schema({
    createdAt: {
        type: Date,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    type: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Phone', phoneSchema)