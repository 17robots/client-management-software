const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    clients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Client'
        }
    ],
    sharedProjects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ],
    teams: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Team'
        }
    ]
})

module.exports = mongoose.model('User', userSchema)