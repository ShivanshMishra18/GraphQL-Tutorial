import { GraphQLServer } from 'graphql-yoga'

// Passing arguments to resolvers
//      Resolvers functions have 4 parameters passed to them.
//      1.parent 2.args 3.ctx(i.e.context) 4.info
//      The ones which we want to use are available in the args
//      parameter as json objects. Others will be discussed later.

// This example is continued from previous part

// Again for compulsory argument use !

const typeDefs = `

    type Query {
        welcome(name: String, id:ID!): String!
        doctor: Doctor!
        hospital: Hospital!
        patient: Patient!
    }

    type Doctor {
        id: ID!
        name: String!
        age: Int
        specialization: String!
    }

    type Hospital {
        id: ID!
        name: String!
        rating: Float
    }

    type Patient {
        id: ID!
        name: String!
        problem: String!
        age: Int!
    }

    `

const resolvers = {
    Query: {
        welcome(parent,args,ctx,info) {
            var name = args.name
            const id = args.id
            if (!name)
                name = "User"
            return 'Welcome '+name+'. Your id is '+id
        },
        doctor() {
            return {
                id: '173fks3',
                name: 'AB King',
                specialization: 'Neurologist'
            }
        },
        hospital() {
            return {
                id: 'hsp1190',
                name: 'Neurokare Hospital',
                rating: 3.4
            }
        },
        patient() {
            return {
                id: 'nrv6202',
                name: 'Nabin Nath',
                problem: 'Neuro - UV Syndrome',
                age: 33
            }
        }
    }
} 

const GServer = new GraphQLServer({ typeDefs, resolvers })
GServer.start(() => {
    console.log("Server is running on port 4000")
})


/*  sample query -- note that name is optional
query {
  welcome(id: "abd145od")
}
*/