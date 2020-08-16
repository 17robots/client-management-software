const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type Client {
        _id: ID!
    }

    type Project {
        _id: ID!
    }

    type Milestone {
        _id: ID!
    }

    type Task {
        _id: ID!
        milestone: Milestone
        creator: User!
        createdAt: String!
        title: String!
        description: String
    }

    type Event {
        _id: ID!
        task: Task!
        creator: User!
        createdDate: String!
        finishedDate: String!
        summary: String
        notes: String
        overrideHours: Double
    }

    type Team {
        _id: ID!
    }

    type Role {
        _id: ID!
    }

    type User {
        _id: ID!
    }

    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }

    type RootQuery {
        loginEmail(email: String!, password: String!): AuthData
        loginUser(username: String!, password: String!): AuthData
        teams: [Team!]
        projects: [Project!]
        clients: [Client!]
    }

    type RootMutation {
        
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)