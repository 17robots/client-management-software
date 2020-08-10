const authResolver = require('./auth')
const clientResolver = require('./client')
const eventResolver = require('./event')
const projectResolver = require('./project')
const roleResolver = require('./role')
const teamResolver = require('./team')

module.exports = {
    ...authResolver,
    ...clientResolver,
    ...eventResolver,
    ...projectResolver,
    ...roleResolver,
    ...teamResolver
}