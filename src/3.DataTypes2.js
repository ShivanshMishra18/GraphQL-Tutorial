import { GraphQLServer } from 'graphql-yoga'

// Custom types - User defined (complex) data types
//      It can be easily noted that primitive types are 
//      often not useful in real world applications


// Note here that we name our types and use them to 
// specify the type in Query. ! means the same 
// We will look at setting up relations in some time

const typeDefs = `

    type Query {
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
        doctor() {
            return {
                id: '173fks3',
                name: 'AB Nath',
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


/*  sample query
query {
	hospital {
    id
    name
  }
  patient {
    name
    age
    problem
  }
}
*/