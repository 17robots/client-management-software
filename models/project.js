const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
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
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model('Project', projectSchema)