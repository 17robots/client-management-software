const Team = require('../../models/team')
const { transformTeam } = require('./merge')

module.exports = {
    teams: async (args, req) => {
        try {
            const teams = await Team.find()
            return teams.map(team => {
                transformTeam(team)
            })
        } catch (err) {
            throw err
        }
    },
    createTeam: async args => {

    }
}