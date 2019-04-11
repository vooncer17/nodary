var DataFeed = require('../models/datafeed')
var User = require('../models/user')

module.exports = {
    create,
    getAllFeeds,
    subscribe
}

async function subscribe(req, res) {
    console.log("SUBSCRIBE USER:", req.user)
    try {
        let user = await User.findById(req.user._id)
        user.subscriptions.push(req.params._id)
        console.log("UPDATED USER", user)
        await user.save()
    }   catch (err) {
        res.json({err})
    }
}

async function create(req, res) {
    try {
        let created = await DataFeed.create({...req.body, ...{creator:req.user}})
        let user = await User.findOne({_id:req.user._id})
        user.dataFeeds.push(created)
        await user.save()
    } catch (err) {
        res.json({err});
    }
}

async function getAllFeeds(req, res) {
    try {
        let feeds= await DataFeed.find({});
        res.json(feeds)
    } catch (err) {
        res.json({err});

    }
}
