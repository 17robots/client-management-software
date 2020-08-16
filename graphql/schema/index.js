const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type Client {
        _id: ID!
    }

    type Project {
        _id: ID!
    }

    type Role {
        _id: ID!
    }

    type Team {
        _id: ID!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String
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