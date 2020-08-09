const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type Client {
        _id: ID!
        name: String!
        address: String
        phone: String
        email: String
        paymentInfo: String
        additionalNotes: String
        projects: [Project!]
        active: Boolean
    }

    type Event {
        _id: ID!
        title: String!
        notes: String
        milestone: Milestone
        project: Project!
        hours: Float!
        creator: User!
    }

    type Milestone {
        _id: ID!
        createdAt: String!
        dueDate: String
        description: String
        project: Project!
        milestonePayment: Float
        paid: Boolean
        creator: User!
    }

    type Project {
        _id: ID!
        creator: User!
        title: String!
        description: String
        client: Client!
        dueDate: String
        milestones: [Milestone!]
        additionalNotes: String
        paymentType: String!
        total: Float
        rate: Float
        estimatedHours: Float
        paid: Boolean
        cancelled: Boolean
        sharedUsers: [User!]
        assignedUsers: [User!]
        team: Team
    }

    type Role {
        _id: ID!
        name: String!
        priority: Int!
        addUser: Boolean!
        removeUser: Boolean!
        assignRole: Boolean!
        removeRole: Boolean!
        addProject: Boolean!
        closeProject: Boolean!
        editProject: Boolean!
        addMilestone: Boolean!
        deleteMilestone: Boolean!
        editMilestone: Boolean!
        assignUser: Boolean!
        unassignUser: Boolean!
        editTeam: Boolean!
        assignedUsers: [User!]
    }

    type Team {
        _id: ID!
        creator: User!
        title: String!
        projects: [Project!]
        roles: [Role!]
        users: [User!]
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String
        clients: [Client!]
        sharedProjects: [Project!]
        teams: [Team!]
    }

    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }

    input UserInput {
        username: String!
        name: String!
        email: String!
        password: String!
    }

    type RootQuery {
        loginEmail(email: String!, password: String!): AuthData
        loginUser(username: String!, password: String!): AuthData
        events: [Event!]
        teams: [Team!]
        projects: [Project!]
        roles: [Role!]
        clients: [Client!]
    }

    type RootMutation {
        createUser(userInput: UserInput): User
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)