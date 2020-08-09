const Event = require('../../models/event')

module.exports = {
    events: async(args, req) => {
        try {
            const events = await Event.find()
            return events.map(event => {
                console.log(event._doc)
                return event._doc
            })
        } catch(err) {
            throw err
        }
    }
}