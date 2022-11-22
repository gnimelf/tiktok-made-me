// db
const db = require("../config/connection");

// Models
const { Profile, Post, Comment } = require("../models");

// seed data
const profileSeeds = require("./profileSeeds.json");
const postSeeds = require("./postSeeds.json");
const commentSeeds = require("./commentSeeds.json");
const { count } = require("../models/Comment");

db.once("open", async () => {
    try {
        await Post.deleteMany({});
        await Profile.deleteMany({});
        await Comment.deleteMany({});

        await Profile.create(profileSeeds);


            
        // Seed one user
        for (let i = 0; i < postSeeds.length; i++) {
            const { _id, userName } = await Post.create(postSeeds[i]);

            const comment = await Comment.create(commentSeeds[i]);

            await Comment.findOneAndUpdate(
                { _id: comment._id},
                { postId: _id }
            )


            const user = await Profile.findOneAndUpdate(
                { userName: userName },
                {
                    $addToSet: {
                        posts: _id,
                        comments: comment._id,
                    },
                }
            );
            const post = await Post.findOneAndUpdate(
                { _id },
                {
                    $addToSet: {
                        comments: comment._id,
                    },
                }
            );
        }
 
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
  
    console.log("seeding is finished");
    process.exit(0);
    
});
