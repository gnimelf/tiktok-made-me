const { Profile, Post } = require("../models");

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find().populate('posts');
        },
        profile: async (parent, { profileId }) => {
            return Profile.findOne({ id_: profileId }).populate('posts');
        },
        posts: async () => {
            return Post.find({});
        },
        post: async (parent, { postId }) => {
            return Post.findOne({ id_: postId });
        },
    },

    Mutation: {
        addProfile: async (parent, { firstName, lastName, posts }) => {
            return await Profile.create({ firstName, lastName, posts });
        },
        addPost: async (parent, { profileId, title, description }) => {
            const post = await Post.create({
                profileId,
                title,
                description,
            });
            await Profile.findOneAndUpdate(
                { _id: profileId },
                {
                    $addToSet: {
                        posts: post._id,
                    },
                }
            );
            return post;
        },
    },
};

module.exports = resolvers;
