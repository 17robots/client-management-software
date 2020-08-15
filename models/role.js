const mongoose = require('mongoose')

const { Schema } = mongoose

const roleSchema = new Schema({
    createdAt: {
        type: Date,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Role', roleSchema)