// db
const db = require('../config/connection');

// Models
const { Profile, Post } = require('../models');

// seed data
const profileSeeds = require("./profileSeeds.json");
const postSeeds = require("./postSeeds.json");

db.once('open', async () => {
    try {
        await Post.deleteMany({})
        await Profile.deleteMany({})

        await Profile.create(profileSeeds);

        // Get one user
        for (let i = 0; i < postSeeds.length; i++) {
            const { _id, userName } = await Post.create(postSeeds[i])
            const user = await Profile.findOneAndUpdate(
                { userName: userName },
                {
                    $addToSet: {
                        posts: _id,
                    }
                }
            );
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("seeding is finished");
    process.exit(0);
})