const mongoose = require('mongoose')

const { Schema } = mongoose

const clientSchema = new Schema({
    createdAt: {
        type: Date,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    address: {
        type: String,
        required: true
    },
    clientPhone: {
        type: Schema.Types.ObjectId,
        ref: 'Phone'
    },
    clientEmail: {
        type: String,
        required: false
    },
    mainContact: {
        type: Schema.Types.ObjectId,
        ref: 'Contact'
    },
    otherContacts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Contact'
        }
    ]
})

module.exports = mongoose.model('Client', clientSchema)