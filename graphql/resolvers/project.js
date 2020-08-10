const Project = require('../../models/project')
const { transformProject } = require('./merge')

module.exports = {
    projects: async (args, req) => {
        try {
            const projects = await Project.find()
            return projects.map(project => {
                transformProject(project)
            })
        } catch (err) {
            throw err
        }
    },
    createProject: async args => {

    }
}