const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    },
    milestone: {
        type: SchemaObjectId,
        ref: 'Milestone',
        required: false
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    hours: {
        type: Double,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('Event', eventSchema)