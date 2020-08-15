const mongoose = require('mongoose')

const { Schema } = mongoose

const eventSchema = new Schema({
    createdAt: {
        type: Date,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    task: {
        type: Schema.Types.ObjectId,
        ref: 'Task'
    },
    finishedDate: {
        type: Date,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    overrideHours: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('Event', eventSchema)