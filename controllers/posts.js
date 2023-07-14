const posts = require("../models/posts");

module.exports.posts = async (req, res) => {
    const userId = req.user._id
    const { title, top, desc, price,category } = req.body
    // postsSchema
    try {
        const newFeed = await posts.create({
            title,
            desc,
            price,
            category,
            top,
            author: userId
        })
        return res.status(200).json({ message: newFeed });
    } catch (error) {
        return res.status(500).json({ error });

    }
}

module.exports.getFeed = async (req, res) => {
    try {
        const success = await posts.find().populate('author', "_id role")
        return res.status(200).json({ success });
    } catch (error) {
        return res.status(500).json({ error });

    }
}
module.exports.getMyFeed = async (req, res) => {
    try {
        const success = await posts.find({ author: req.user._id })
        return res.status(200).json({ success });
    } catch (error) {
        return res.status(500).json({ error });

    }
}