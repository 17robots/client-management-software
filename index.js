  
const express = require('express')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')

const graphQLSchema = require('./graphql/schema')
const graphQlResolvers = require('./graphql/resolvers')


const app = express()

app.use(bodyParser.json())

app.use('/graphql', graphqlHTTP({
    schema: graphQLSchema,
    rootValue: graphQlResolvers,
    graphiql: true
}))

app.set('port', 3001)

mongoose.connect(`mongodb+srv://${process.env.user}:${process.env.password}@projects-wtsk3.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`, { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
}).then(() => {
    app.listen(app.get('port'), (err) => {
        if(err) console.log(err)
        console.log("Listening on port 3001")
    })
})