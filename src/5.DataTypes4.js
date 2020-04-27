import { GraphQLServer } from 'graphql-yoga'

// Arrays of Scalar types
//      We generally require applications to pass on
//      information as arrays. Here, we discuss how 
//      to pass arrays both to and from server

const typeDefs = `

    type Query {
        getArray: [Float]!
        getSumfromArray(array: [Float!]!): Float!
    }

    `

const resolvers = {
    Query: {
        
        getArray() {
            return [3.9 , 3 , 92];
        },

        getSumfromArray(parent, args, ctx, info) {
            if (args.array.length === 0) {
                return 0
            }
            return args.array.reduce((acc, val) => acc + val)
        }
    }
} 

const GServer = new GraphQLServer({ typeDefs, resolvers })
GServer.start(() => {
    console.log("Server is running on port 4000")
})


/*  sample query
query {
  getArray,
  getSumfromArray(array: [4.2 , 9 , 9])
}
*/