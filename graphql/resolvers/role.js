const Role = require('../../models/role')
const { transformRole } = require('./merge')

module.exports = {
    roles: async (args, req) => {
        try {
            const roles = await Role.find()
            return roles.map(role => {
                transformRole(role)
            })
        } catch (err) {
            throw err
        }
    },
    createRole: async args => {

    }
}