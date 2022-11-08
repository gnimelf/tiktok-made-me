const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    image: {
        type: String,
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