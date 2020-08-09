const mongoose = require('mongoose')

const Schema = mongoose.Schema

const milestoneSchema = new Schema({
    createdDate: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    milestonePayment: {
        type: Number,
        required: false
    },
    paid: {
        type: Boolean,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('Milestone', milestoneSchema)