const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type Client {
        _id: ID!
        createdAt: String!
        creator: User!
        name: String!
        team: Team
        address: String
        clientPhone: String
        clientEmail: String
        mainContact: Contact
        otherContacts: [Contact!]
    }

    type Contact {
        _id: ID!
        createdAt: String!
        creator: User!
        firstName: String!
        lastName: String
        email: String!
        phoneNumbers: [Phone!]
    }

    type Phone {
        _id: ID!
        createdAt: String!
        creator: User!
        type: String!
        number: String!
    }

    type Project {
        _id: ID!
        createdAt: String!
        creator: User!
        client: Client!
        team: Team
        name: String!
        description: String
        estimatedHours: Float!
        total: Float
        rate: Float
        paymentType: String!
        dueDate: String
        sharedUsers: [User!]
        closed: Boolean!
    }

    type Milestone {
        _id: ID!
        createdAt: String!
        creator: User!
        project: Project!
        name: String!
    }

    type Task {
        _id: ID!
        createdAt: String!
        creator: User!
        project: Project!
        title: String!
        milestone: Milestone
        description: String
        completed: Boolean!
    }

    type Event {
        _id: ID!
        createdAt: String!
        creator: User!
        task: Task!
        finishedDate: String!
        summary: String
        notes: String
        overrideHours: Double
    }

    type Team {
        _id: ID!
        createdAt: String!
        creator: User!
        name: String!
        bannerImg: String
        users: [User!]
    }

    type Role {
        _id: ID!
        createdAt: String!
        creator: User!
        team: Team!
        name: String!
        color: String!
        permissions: [String!]
    }

    type User {
        _id: ID!
        createdAt: String!
        firstName: String!
        lastName: String
        username: String!
        email: String!
        password: String!
    }

    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }

    type RootQuery {
        clients: [Client!]
        contacts: [Contact!]
        events: [Event!]
        milestones: [Milestone!]
        phones: [Phone!]
        projects: [Project!]
        roles: [Role!]
        tasks: [Task!]
        teams: [Team!]
        users: [User!]
    }

    type RootMutation {
        
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)