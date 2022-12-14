const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Profile {
        _id: ID
        userName: String
        password: String
        firstName: String
        lastName: String
        posts: [Post]
        comments: [Comment]
    }

    type Post {
        _id: ID
        userName: String
        url: String
        image: String  
        title: String
        description: String
        comments: [Comment]
    }

    type Comment {
        _id: ID
        userName: String
        postId: String
        title: String
        commentText: String
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
        post(postId: ID!): Post
        comments: [Comment]
        comment(commentId: ID! ): Comment
    }

    type Mutation {
        addProfile(firstName: String!, lastName: String!,  email: String!, userName: String!,  password: String! ): Auth
        login(userName: String!, password: String!): Auth
        removeComment(commentId: ID!): Comment
        addComment( postId: ID!, title: String!, commentText: String!): Comment
        addPost(profileId:ID, title: String, description: String, userName: String, url: String image: String ): Post
    }
`;

module.exports = typeDefs;
