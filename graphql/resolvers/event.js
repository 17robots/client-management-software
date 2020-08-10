const Event = require('../../models/event')
const { transformEvent } = require('./merge')

module.exports = {
    events: async (args, req) => {
        try {
            const events = await Event.find()
            return events.map(event => {
                transformEvent(event)
            })
        } catch (err) {
            throw err
        }
    },
    createEvent: async args => {

    }
}