const authResolver = require('./auth')
const clientResolver = require('./clients')
const eventResolver = require('./events')
const projectResolver = require('./projects')
const roleResolver = require('./roles')
const teamResolver = require('./teams')

module.exports = {
    ...authResolver,
    ...clientResolver,
    ...eventResolver,
    ...projectResolver,
    ...roleResolver,
    ...teamResolver
}