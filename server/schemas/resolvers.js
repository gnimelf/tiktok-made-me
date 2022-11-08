const { Profile, Post } = require("../models");

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find().populate('posts');
        },
        profile: async (parent, { userName }) => {
            return Profile.findOne({ id_: userName }).populate('posts');
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
            return await Profile.create({ firstName, lastName, email, userName, posts });
        },
        addPost: async (parent, { userName, url, image, title, description }) => {
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
        },
    },
};

module.exports = resolvers;
