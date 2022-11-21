const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Profile {
        _id: ID
        userName: String
        password: String
        firstName: String
        lastName: String
        posts: [Post]
    }

    type Post {
        _id: ID
        userName: String
        url: String
        image: String  
        title: String
        description: String
    }

    type Auth {
        token: ID!
        profile: Profile
    }

    type Query {
        profiles: [Profile]
        profile(profileId: ID): Profile
        me: Profile
        posts: [Post]
        post(_id: ID!): Post
    }

    type Mutation {
        addProfile(firstName: String!, lastName: String!,  email: String!, userName: String!,  password: String! ): Auth
        login(userName: String!, password: String!): Auth
        
        addPost(profileId:ID, title: String, description: String, userName: String, url: String image: String ): Post
    }
`;

module.exports = typeDefs;
