const Client = require('../../models/client')
const { transformClient } = require('./merge')

module.exports = {
    clients: async (args, req) => {
        try {
            const clients = await Client.find()
            return clients.map(client => {
                transformClient(client)
            })
        } catch (err) {
            throw err
        }
    },
    createClient: async args => {

    }
}