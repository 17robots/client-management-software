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

    interface Content {
        name: String!
    }

    type Event {
        _id: ID!
        title: String!
        notes: String
        milestone: Milestone
        project: Project!
        hours: Float!
        content: [Content!]
        creator: User!
    }

    type List implements Content {
        _id: ID!
        name: String!
        items: [String!]
    }

    type Milestone {
        _id: ID!
        title: String!
        description: String
        project: Project!
        milestonePayment: Float
        paid: Boolean
        creator: User!
        createdAt: String!
        dueDate: String
    }

    type Note implements Content {
        name: String!
        note: String!
    }

    type Project {
        _id: ID!
        title: String!
        description: String
        client: Client!
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
        creator: User!
        createdDate: String!
        dueDate: String
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

    input ClientInput {
        name: String!
        address: String
        phone: String
        email: String
        paymentInfo: String
        additionalNotes: String
    }

    input EventInput {
        title: String!
        note: String
        projectId: ID!
        hours: Float!
        creatorId: ID!
    }

    input MilestoneInput {
        title: String!
        description: String
        projectId: ID!
        milestonePayment: Float
        paid: Boolean
        creatorId: ID!
        createdAt: String!
        dueDate: String
    }

    input ProjectInput {
        title: String!
        description: String
        clientId: ID!
        additionalNotes: String
        paymentType: String!
        total: Float
        rate: Float
        estimatedHours: Float
        teamId: ID
        creatorId: ID!
        createdDate: String!
        dueDate: String
    }

    input RoleInput {
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
    }

    input TeamInput {
        creatorId: ID!
        title: String!
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
        createClient(clientInput: ClientInput): Client
        createEvent(eventInput: EventInput): Event
        createMilestone(milestoneInput: MilestoneInput): Milestone
        createProject(projectInput: ProjectInput): Project
        createRole(roleInput: RoleInput): Role
        createTeam(teamInput: TeamInput): Team
        createUser(userInput: UserInput): User
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)