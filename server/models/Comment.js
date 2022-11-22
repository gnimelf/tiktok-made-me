const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        require: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    commentText: {
        type: String,
        trim: true,
        require: true
    }
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;