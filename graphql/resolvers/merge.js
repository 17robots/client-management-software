const DataLoader = require('dataloader')

const { dateToString } = require('../helpers/date')

const Client = require('../../models/client')
const Contact = require('../../models/contact')
const Event = require('../../models/event')
const Milestone = require('../../models/milestone')
const Phone = require('../../models/phone')
const Project = require('../../models/project')
const Role = require('../../models/role')
const Task = require('../../models/task')
const Team = require('../../models/team')
const User = require('../../models/user')

const clientLoader = new DataLoader(clientIds => clients(clientIds))
const contactLoader = new DataLoader(contactIds => contacts(contactIds))
const eventLoader = new DataLoader(eventIds => events(eventIds))
const milestoneLoader = new DataLoader(milestoneIds => milestones(milestoneIds))
const phoneLoader = new DataLoader(phoneIds => phones(phoneIds))
const projectLoader = new DataLoader(projectIds => projects(projectIds))
const roleLoader = new DataLoader(roleIds => roles(roleIds))
const taskLoader = new DataLoader(taskIds => tasks(taskIds))
const teamLoader = new DataLoader(teamIds => teams(teamIds))
const userLoader = new DataLoader(userIds => users(userIds))

const client = async clientId => {
    try {
        const client = await clientLoader.load(clientId.toString())
        return client
    } catch (err) { throw err }
}

const clients = async clientIds => {
    try {
        const clients = await Client.find({ _id: { $in: clientIds } })
        clients.sort((a, b) => clientIds.indexOf(a._id.toString()) - clientIds.indexOf(b._id.toString()))
        return clients.map(client => transformClient(client))
    } catch (err) { throw err }
}

const transformClient = client => {
    return {
        ...client._doc,
        _id: client.id,
        createdAt: dateToString(client._doc.createdAt),
        creator: user.bind(this, client.creator),
        name: client.name,
        team: team.bind(this, client.team),
        address: client.address,
        clientPhone: phone.bind(this, client.clientPhone),
        mainContact: contact.bind(this, client.mainContact),
        otherContacts: () => contactLoader.loadMany(client._doc.otherContacts)
    }
}

const contact = async contactId => {
    try {
        const contact = await contactLoader.load(contactId.toString())
        return contact
    } catch (err) { throw err }
}

const contacts = async contactIds => {
    try {
        const contacts = await Contact.find({ _id: { $in: contactIds } })
        contacts.sort((a, b) => contactIds.indexOf(a._id.toString()) - contactIds.indexOf(b._id.toString()))
        return contacts.map(contact => transformContact(contact))
    } catch (err) { throw err }
}

const transformContact = contact => {
    return {
        ...contact._doc,
        _id: contact.id,
        createdAt: dateToString(contact._doc.createdAt),
        creator: user.bind(this, contact.creator),
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phoneNumbers: () => phoneLoader.loadMany(contact._doc.phoneNumbers)
    }
}

const event = async eventId => {
    try {
        const event = await eventLoader.load(eventId.toString())
        return event
    } catch (err) { throw err }
}

const events = async eventIds => {
    try {
        const events = await Event.find({ _id: { $in: eventIds } })
        events.sort((a, b) => eventIds.indexOf(a._id.toString()) - eventIds.indexOf(b._id.toString()))
        return events.map(event => transformEvent(event))
    } catch (err) { throw err }
}

const transformEvent = event => {
    return {
        ...event._doc,
        _id: event.id,
        createdAt: dateToString(event._doc.createdAt),
        creator: user.bind(this, event.creator),
        task: task.bind(this, event.task),
        finishedDate: dateToString(event._doc.finishedDate),
        summary: event.summary,
        notes: event.notes,
        overrideHours: event.overrideHours
    }
}

const milestone = async milestoneId => {
    try {
        const milestone = await milestoneLoader.load(milestoneId.toString())
        return milestone
    } catch (err) { throw err }
}

const milestones = async milestoneIds => {
    try {
        const milestones = await Milestone.find({ _id: { $in: milestoneIds } })
        milestones.sort((a, b) => milestoneIds.indexOf(a._id.toString()) - milestoneIds.indexOf(b._id.toString()))
        return milestones.map(milestone => transformMilestone(milestone))
    } catch (err) { throw err }
}

const transformMilestone = milestone => {
    return {
        ...milestone._doc,
        _id: milestone.id,
        createdAt: dateToString(milestone._doc.createdAt),
        creator: user.bind(this, milestone.creator),
        project: project.bind(this, milestone.project),
        name: milestone.name
    }
}

const phone = async phoneId => {
    try {
        const phone = await phoneLoader.load(phoneId.toString())
    } catch (err) { throw err }
}

const phones = async phoneIds => {
    try {
        const phones = Phone.find({ _id: { $in: phoneIds } })
        phones.sort((a, b) => phoneIds.indexOf(a._id.toString()) - phoneIds.indexOf(b._id.toString()))
        return phones.map(phone => transformPhone(phone))
    } catch (err) { throw err }
}

const transformPhone = phone => {
    return {
        ...phone._doc,
        _id: phone.id,
        creator: user.bind(this, phone.creator),
        type: phone.type,
        number: phone.number
    }
}

const project = async projectId => {
    try {
        const project = await projectLoader.load(projectId.toString())
        return project
    } catch (err) { throw err }
}

const projects = async projectsIds => {
    try {
        const projects = await Project.find({ _id: { $in: projectsIds } })
        projects.sort((a, b) => projectsIds.indexOf(a._id.toString()) - projectsIds.indexOf(b._id.toString()))
        return projects.map(project => transformProject(project))
    } catch (err) { throw err }
}

const transformProject = project => {
    return {
        ...project.id,
        _id: project.id,
        createdAt: dateToString(project._doc.createdAt),
        creator: user.bind(this, project.creator),
        client: client.bind(this, project.client),
        team: team.bind(this, project.team),
        name: project.name,
        description: project.description,
        estimatedHours: project.estimatedHours,
        total: project.total,
        rate: project.rate,
        paymentType: project.paymentType,
        dueDate: dateToString(project._doc.dueDate),
        sharedUsers: () => userLoader.loadMany(project._doc.sharedUsers),
        active: project.active
    }
}

const role = async roleId => {
    try {
        const role = await roleLoader.load(roleId.toString())
        return role
    } catch (err) { throw err }
}

const roles = async roleIds => {
    try {
        const roles = await Role.find({ _id: { $in: roleIds } })
        roles.sort((a, b) => roleIds.indexOf(a._id.toString()) - roleIds.indexOf(b._id.toString()))
        return roles.map(role => transformRole(role))
    } catch (err) { throw err }
}

const transformRole = role => {
    return {

    }
}

const task = async taskId => {
    try {
        const task = await taskLoader.load(taskId.toString())
        return task
    } catch (err) { throw err }
}

const tasks = async taskIds => {
    try {
        const tasks = Task.find({ _id: { $in: taskIds } })
        tasks.sort((a, b) => taskIds.indexOf(a._id.toString()) - taskIds.indexOf(b._id.toString()))
        return tasks.map(task => transformTask(task))
    } catch (err) { throw err }
}

const transformTask = task => {
    return {
        ...task._doc,
        _id: task.id,
        createdAt: dateToString(task._doc.createdAt),
        creator: user.bind(this, task.creator),
        project: project.bind(this, task.project),
        title: task.title,
        milestone: milestone.bind(this, task.milestone),
        description: task.description,
        completed: task.completed
    }
}

const team = async teamId => {
    try {
        const team = await teamLoader.load(teamId.toString())
        return team
    } catch (err) { throw err }
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
        createdAt: dateToString(team._doc.createdAt),
        creator: user.bind(this, team.creator),
        name: team.name,
        bannerImg: team.bannerImg,
        users: () => userLoader.loadMany(team._doc.users)
    }
}

const user = async userId => {
    try {
        const user = await userLoader.load(userId.toString())
        return user
    } catch (err) { throw err }
}

const users = async userIds => {
    try {
        const users = await Team.find({ _id: { $in: userIds } })
        users.sort((a, b) => userIds.indexOf(a._id.toString()) - userIds.indexOf(b._id.toString()))
        return users.map(user => transformUser(user))
    } catch (err) { throw err }
}

const transformUser = user => {
    return {
        ...user._doc,
        _id: user.id,
        createdAt: dateToString(user._doc.createdAt),
        creator: user.bind(this, user.creator),
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email
    }
}

exports.transformClient = transformClient
exports.transformContact = transformContact
exports.transformEvent = transformEvent
exports.transformMilestone = transformMilestone
exports.transformPhone = transformPhone
exports.transformProject = transformProject
exports.transformRole = transformRole
exports.transformTask = transformTask
exports.transformTeam = transformTeam
exports.transformUser = transformUser