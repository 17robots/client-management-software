const mongoose = require('mongoose')

const { Schema } = mongoose

const milestoneSchema = new Schema({
    createdAt: {
        type: Date,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    project: {
        type: Object.Types.ObjectId,
        ref: 'Project'
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Milestone', milestoneSchema)