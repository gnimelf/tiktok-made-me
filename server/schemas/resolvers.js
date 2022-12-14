const { AuthenticationError } = require("apollo-server-express");
const { Profile, Post, Comment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find().populate("posts" && "comments");
        },
        profile: async (parent, { userName }) => {
            return Profile.findOne({ userName: userName }).populate(
                "posts" && "comments"
            );
        },

        me: async (parent, args, context) => {
            if (context.profile) {
                return Profile.findOne({ _id: context.profile._id }).populate(
                    "comments"
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        posts: async () => {
            return Post.find().populate("comments");
        },
        post: async (parent, { postId }) => {
            return Post.findOne({ _id: postId }).populate("comments");
        },
        comments: async () => {
            return Comment.find({});
        },
        comment: async (parent, { commentId }) => {
            return Comment.findOne({ _id: commentId });
        },
    },

    Mutation: {
        addProfile: async (
            parent,
            { firstName, lastName, email, userName, password }
        ) => {
            const profile = Profile.create({
                firstName,
                lastName,
                userName,
                email,
                password,
            });
            const token = signToken(profile);
            return { token, profile };
        },
        addPost: async (
            parent,
            { userName, url, image, title, description },
            context
        ) => {
            if (context.profile) {
                const post = await Post.create({
                    userName,
                    image,
                    url,
                    title,
                    description,
                });
                await Profile.findOneAndUpdate(
                    { userName: userName },
                    {
                        $addToSet: {
                            posts: post._id,
                        },
                    }
                );
                return post;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        login: async (parent, { userName, password }) => {
            const profile = await Profile.findOne({ userName });

            if (!profile) {
                throw new AuthenticationError(
                    "No profile with username was found!"
                );
            }

            const correctPassword = await profile.isPasswordCorrect(password);

            if (!correctPassword) {
                throw new AuthenticationError("Incorrect password!");
            }
            const token = signToken(profile);
            return { token, profile };
        },

        addComment: async (parent, { postId, title, commentText },context) => {
            if (context.profile) {
                const comment = await Comment.create({ userName: context.profile.userName, title, commentText, postId });
                
                await Profile.findOneAndUpdate(
                    { _id: context.profile._id },
                    { $addToSet: { comments: comment._id } }
                  );

                await Post.findOneAndUpdate(
                    {_id: postId},
                    { $addToSet: { comments: comment._id}}
                )
                return comment;
            }
            throw new AuthenticationError("You need to be logged in!");
        },

        removeComment: async (parent, { commentId }) => {
            const comment = await Comment.findOneAndDelete({ _id: commentId });
            return comment;
        },
    },
};

module.exports = resolvers;
