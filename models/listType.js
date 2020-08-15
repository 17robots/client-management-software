const mongoose = require('mongoose')
const Content = require('./content')

module.exports = Content.discriminator('List', new mongoose.Schema({
    items: 
    [
        {
            type: String
        }
    ]
}))