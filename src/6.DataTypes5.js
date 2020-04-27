import { GraphQLServer } from 'graphql-yoga'

// Arrays 2 - Custom type arrays

// This example is continued from 3.DataTypes2.js
// We will be modifying this as we go on to create
// a small application.

// Dummy data for the sake of illustration 
// ( should ideally come from a database )
//      Note that query for all hospitals includes
//      a search string to match for keywords

const docs_list = [{
        id: '3972e42',
        name: 'KK Stokes',
        specialization: 'Neurology'
    }, {
        id: '39dfg40',
        name: 'Bem Stoker',
        specialization: 'Cardiology'
    }, {
        id: '3ds4542',
        name: 'Benjamin R',
        specialization: 'Immunology'
    }
]

const hosp_list = [{
        id: 'h8276ed',
        name: 'Allcare Hospital',
        tags: 'heart, gym, health, kidney, respiratory'
    },
    {
        id: 'h8236e3',
        name: 'Doctors Care Hospital',
        tags: 'doctor, gym, liver, govt, respiratory'
    }
]

const typeDefs = `

    type Query {
        me: Doctor!
        all_doctors: [Doctor!]!
        all_hospitals(pattern: String): [Hospital!]! 
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
        tags: String!
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
        
        me() {
            return {
                id: '3972e42',
                name: 'KK Stokes',
                specialization: 'Neurology'
            }
        },

        all_doctors() {
            return docs_list
        },

        all_hospitals(parent, args, ctx, info) {
            if ( !args.pattern )
                return hosp_list
            return hosp_list.filter((hosp) => hosp.tags.toLowerCase().includes(args.pattern.toLowerCase()))
        }
    }
} 

const GServer = new GraphQLServer({ typeDefs, resolvers })
GServer.start(() => {
    console.log("Server is running on port 4000")
})


/*  sample query -- note that name is optional
query {
  me {
    name
  }
  all_doctors {
    name
    specialization
  }
  all_hospitals(pattern: "Heart") {
    name
  }
}
*/