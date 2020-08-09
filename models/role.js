const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    addUser: {
        type: Boolean,
        reuired: true
    },
    removeUser: {
        type: Boolean,
        required: true
    },
    assignRole: {
        type: Boolean,
        required: true
    },
    removeRole: {
        type: Boolean,
        required: true
    },
    addProject: {
        type: Boolean,
        required: true
    },
    closeProject: {
        type: Boolean,
        required: true
    },
    editProject: {
        type: Boolean,
        required: true
    },
    addMilestone: {
        type: Boolean,
        required: true
    },
    deleteMilestone: {
        type: Boolean,
        required: true
    },
    editMilestone: {
        type: Boolean,
        required: true
    },
    assignUser: {
        type: Boolean,
        required: true
    },
    unassignUser: {
        type: Boolean,
        required: true
    },
    editTeam: {
        type: Boolean,
        required: true
    },
    assignedUsers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

module.exports = mongoose.model('Role', roleSchema)