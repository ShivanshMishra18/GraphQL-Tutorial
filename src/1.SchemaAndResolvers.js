import { GraphQLServer } from 'graphql-yoga'

// Type Definitions (Typdefs) / Schema
//      A description of database, performable actions. Contains raw graphql syntax:
//      Queries

const typeDefs = `
    type Query {
        welcome: String!
        more: String!
    }
`

// Resolvers
//      Functions describing the actions that can be called from default playground
//      Good practice to have pattern similar to typeDefs

const resolvers = {
    Query: {
        welcome() {
            return 'This query returned this String'
        },
        more() {
            return '! means a string will always be returned, never null'
        }
    }
} 

// Setting up server and letting it know the Schema and Resolver functions
// Server runs on port 4000 by default

const GServer = new GraphQLServer({ typeDefs, resolvers })
GServer.start(() => {
    console.log("Server is running on port 4000")
})