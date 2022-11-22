const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt') ;

const profileSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    userName: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        },
    ]
});

profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 15;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

profileSchema.methods.isPasswordCorrect = async function(password){
    return bcrypt.compare(password, this.password);
}

const Profile = model("Profile", profileSchema);

module.exports = Profile;
