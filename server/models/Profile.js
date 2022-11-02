const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
});

const Profile = model("Profile", profileSchema);

module.exports = Profile;
