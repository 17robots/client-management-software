const mongoose = require('mongoose')
const Content = require('./content')

module.exports = Content.discriminator('Note', new mongoose.Schema({
    note: {
        type: String,
        required: true
    }
}))
