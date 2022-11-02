const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    profileId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    }
});

const Post = model('Post', postSchema);

module.exports = Post;