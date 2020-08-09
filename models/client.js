const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    paymentInfo: {
        type: String,
        required: false
    },
    additionalNotes: {
        type: String,
        required: false
    },
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ],
    active: {
        type: Boolean,
        required: false
    }
})

module.exports = mongoose.model('Client', clientSchema)