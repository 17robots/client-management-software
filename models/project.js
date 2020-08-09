const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    dueDate: {
        type: Date,
        required: false
    },
    milestones: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Milestone'
        }
    ],
    additonalNotes: {
        type: String,
        required: false
    },
    paymentType: {
        type: String,
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
    estimatedHours: {
        type: Number,
        required: false
    },
    paid: {
        type: Boolean,
        required: false
    },
    cancelled: {
        type: Boolean,
        required: false
    },
    sharedUser: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    assignedUsers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }
})

module.exports = mongoose.model('Project', projectSchema)