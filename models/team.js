const mongoose = require('mongoose')
const schema = require('../graphql/schema')

const Schema = mongoose.Schema

const teamSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ],
    roles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Role'
        }
    ],
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

module.exports = mongoose.model('Team', teamSchema)