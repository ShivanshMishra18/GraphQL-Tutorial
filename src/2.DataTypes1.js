import { GraphQLServer } from 'graphql-yoga'

// Scalar types - String, Boolean, Int, Float, ID
// ID for identifier, similar to string

const typeDefs = `
    type Query {
        welcome: String!
        id: ID!
        integer: Int
        fractional: Float
        yes: Boolean
    }
`

// Note that ! does not allow us to put a null value

const resolvers = {
    Query: {
        welcome() {
            return 'This query returned this String'
        },
        id() {
            return '174efr3'
        },
        integer() {
            return null
        },
        fractional() {
            return 8.73
        },
        yes() {
            return true
        }
    }
} 

const GServer = new GraphQLServer({ typeDefs, resolvers })
GServer.start(() => {
    console.log("Server is running on port 4000")
})