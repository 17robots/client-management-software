const mongoose = require('mongoose')

const { Schema } = mongoose

const projectSchema = new Schema({
    createdAt: {
        type: Date,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    estimatedHours: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: false
    },
    rate: {
        type: Number,
        required: false
    },
    paymentType: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: false
    },
    sharedUsers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    closed: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Project', projectSchema)