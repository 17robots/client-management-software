const DataLoader = require('dataloader')

const { dateToString } = require('../helpers/date')

const Client = require('../../models/client')
const Event = require('../../models/event')
const Milestone = require('../../models/milestone')
const Project = require('../../models/project')
const Role = require('../../models/role')
const Team = require('../../models/team')
const User = require('../../models/user')

const clientLoader = new DataLoader(clientIds => clients(clientIds))
const eventLoader = new DataLoader(eventIds => events(eventIds))
const milestoneLoader = new DataLoader(milestoneIds => milestones(milestoneIds))
const projectLoader = new DataLoader(projectIds => projects(projectIds))
const roleLoader = new DataLoader(roleIds => roles(roleIds))
const teamLoader = new DataLoader(teamIds => teams(teamIds))
const userLoader = new DataLoader(userIds => users(userIds))

const client = async clientId => {
    try {
        const client = await clientLoader.load(clientId.toString())
        return client
    } catch (err) {
        throw err
    }
}

const clients = async clientIds => {
    try {
        const clients = await Client.find({ _id: { $in: clientIds } })
        clients.sort((a, b) => clientIds.indexOf(a._id.toString()) - clientIds.indexOf(b._id.toString()))
        return clients.map(client => transformClient(client))
    } catch (err) {
        throw err
    }
}

const transformClient = client => {
    return {
        ...client._doc,
        _id: client._id,
        name: client.name,
        address: client.address,
        phone: client.phone,
        email: client.email,
        paymentInfo: client.paymentInfo,
        additionalNotes: client.additionalNotes,
        projects: () => projectLoader.loadMany(client._doc.projects),
        active: client.active
    }
}

const event = async eventId => {
    try {
        const event = await eventLoader.load(eventId.toString())
        return event
    } catch (err) {
        throw err
    }
}

const events = async eventIds => {
    try {
        const events = await Event.find({ _id: { $in: eventIds } })
        events.sort((a, b) => eventIds.indexOf(a._id.toString()) - eventIds.indexOf(b._id.toString()))
        return events.map(event => transformEvent(event))
    } catch (err) {
        throw err
    }
}

const transformEvent = event => {
    return {
        ...event._doc,
        _id: event.id,
        notes: event.notes,
        milestone: milestone.bind(this, event._doc.milestone),
        project: project.bind(this, event._doc.project),
        hours: event.hours,
        creator: user.bind(this, event._doc.creator)
    }
}

const milestone = async milestoneId => {
    try {
        const milestone = await milestoneLoader.load(milestoneId.toString())
        return milestone
    } catch (err) {
        throw err
    }
}

const milestones = async milestoneIds => {
    try {
        const milestones = await Milestone.find({ _id: { $in: milestoneIds } })
        milestones.sort((a, b) => milestoneIds.indexOf(a._id.toString()) - milestoneIds.indexOf(b._id.toString()))
        return milestones.map(milestone => transformMilestone(milestone))
    } catch (err) {
        throw err
    }
}

const transformMilestone = milestone => {
    return {
        ...milestone._doc,
        _id: milestone.id,
        title: milestone.title,
        description: milestone.description,
        project: project.bind(this, milestone._doc.project),
        milestonePayment: milestone.milestonePayment,
        paid: milestone.paid,
        creator: user.bind(this, milestone._doc.creator),
        createdAt: dateToString(milestone._doc.createdAt),
        dueDate: dateToString(milestone._doc.dueDate),
    }
}

const project = async projectId => {
    try {
        const project = await projectLoader.load(projectId.toString())
        return project
    } catch (err) {
        throw err
    }
}

const projects = async projectsIds => {
    try {
        const peojects = await Project.find({ _id: { $in: projectsIds } })
        peojects.sort((a, b) => projectsIds.indexOf(a._id.toString()) - projectsIds.indexOf(b._id.toString()))
        return peojects.map(project => transformProject(project))
    } catch (err) {
        throw err
    }
}

const transformProject = project => {
    return {
        ...project._doc,
        _id: project.id,
        creator: user.bind(this, project._doc.creator),
        title: project.title,
        description: project.description,
        client: client.bind(this, project._doc.client),
        milestones: () => milestoneLoader.loadMany(project._doc.milestones),
        additionalNotes: project.additionalNotes,
        paymentType: project.paymentType,
        total: project.total,
        rate: project.rate,
        estimatedHours: project.estimatedHours,
        paid: project.paid,
        cancelled: project.cancelled,
        sharedUsers: () => userLoader.loadMany(project._doc.sharedUsers),
        assignedUsers: () => userLoader.loadMany(project._doc.assignedUsers),
        team: team.bind(this, project._doc.team),
        creator: user.bind(this, project._doc.creator),
        createdDate: dateToString(project._doc.createdDate),
        dueDate: dateToString(project._doc.dueDate),
    }
}

const role = async roleId => {
    try {
        const role = await roleLoader.load(roleId.toString())
        return role
    } catch (err) {
        throw err
    }
}

const roles = async roleIds => {
    try {
        const roles = await Role.find({ _id: { $in: roleIds } })
        roles.sort((a, b) => roleIds.indexOf(a._id.toString()) - roleIds.indexOf(b._id.toString()))
        return roles.map(role => transformRole(role))
    } catch (err) {
        throw err
    }
}

const transformRole = role => {
    return {
        ...role._doc,
        _id: role.id,
        name: role.name,
        priority: role.priority,
        addUser: role.addUser,
        removeUser: role.removeUser,
        assignRole: role.assignRole,
        removeRole: role.removeRole,
        addProject: role.addProject,
        closeProject: role.closeProject,
        editProject: role.editProject,
        addMilestone: role.addMilestone,
        deleteMilestone: role.deleteMilestone,
        editMilestone: role.editMilestone,
        assignUser: role.assignUser,
        unassignUser: role.unassignUser,
        editTeam: role.editTeam,
        assignedUsers: () => userLoader.loadMany(role._doc.assignedUsers)
    }
}

const team = async teamId => {
    try {
        const team = await teamLoader.load(teamId.toString())
        return team
    } catch (err) {
        throw err
    }
}

const teams = async teamIds => {
    try {
        const teams = await Team.find({ _id: { $in: teamIds } })
        teams.sort((a, b) => teamIds.indexOf(a._id.toString()) - teamIds.indexOf(b._id.toString()))
        return teams.map(team => transformTeam(team))
    } catch (err) {
        throw err
    }
}

const transformTeam = team => {
    return {
        ...team._doc,
        _id: team.id,
        creator: user.bind(this, team._doc.creator),
        title: team.title,
        projects: () => projectLoader.loadMany(team._doc.projects),
        roles: () => roleLoader.loadMany(team._doc.roles),
        users: () => userLoader.loadMany(team._doc.users)
    }
}

const user = async userId => {
    try {
        const user = await userLoader.load(userId.toString())
        return user
    } catch (err) {
        throw err
    }
}

const users = async userIds => {
    try {
        const users = await Team.find({ _id: { $in: userIds } })
        users.sort((a, b) => userIds.indexOf(a._id.toString()) - userIds.indexOf(b._id.toString()))
        return users.map(user => transformUser(user))
    } catch (err) {
        throw err
    }
}

const transformUser = user => {
    return {
        ...user._doc,
        _id: user.id,
        email: user.email,
        clients: () => clientLoader.loadMany(user._doc.clients),
        sharedProjects: () => projectLoader.loadMany(user._doc.sharedProjects),
        teams: () => teamLoader.loadMany(user._doc.teams)
    }
}

exports.transformClient = transformClient
exports.transformEvent = transformEvent
exports.transformMilestone = transformMilestone
exports.transformProject = transformProject
exports.transformRole = transformRole
exports.transformTeam = transformTeam
exports.transformUser = transformUser