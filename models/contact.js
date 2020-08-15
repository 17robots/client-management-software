const mongoose = require('mongoose')

const { Schema } = mongoose

const contactSchema = new Schema({
    createdAt: {
        type: Date,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    phoneNumbers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Phone'
        }
    ]
})

module.exports = mongoose.model('Contact', contactSchema)