const mongoose = require('mongoose')

const { Schema } = mongoose

const taskSchema = new Schema({
    createdAt: {
        type: Date,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    title: {
        type: String,
        required: true
    },
    milestone: {
        type: Schema.Types.ObjectId,
        ref: 'Milestone',
        required: false
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Task', taskSchema)