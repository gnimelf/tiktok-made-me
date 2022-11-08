const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Profile {
        _id: ID
        userName: String
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

    type Query {
        profiles: [Profile]
        profile(profileId: ID): Profile
        posts: [Post]
        post(_id: ID!): Post
    }

    type Mutation {
        addProfile(firstName: String, lastName: String): Profile
        addPost(profileId:ID, title: String, description: String): Post
    }
`;

module.exports = typeDefs;
