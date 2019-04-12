var DataFeed = require('../models/datafeed')
var User = require('../models/user')

module.exports = {
    create,
    getAllFeeds,
    subscribe,
    getUserFeeds,
    deleteFeed
}

async function subscribe(req, res) {
    console.log("SUBSCRIBE USER:", req.user)
    try {
        let user = await User.findById(req.user._id)
        user.subscriptions.push(req.body.postId)
        console.log("UPDATED USER", user)
        await user.save()
    }   catch (err) {
        res.json({err})
        console.log(err)
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

async function getUserFeeds(req, res) {
    try {
        let feeds= await DataFeed.find({creator: req.params.id});
        res.json(feeds)
    } catch (err) {
        res.json({err});

    }
}
async function deleteFeed(req, res) {
    try {
        let deleted = await DataFeed.findByIdAndDelete(req.params.id)
        let someUsers = await User.find({})
        let subs = await someUsers.forEach(s=>{
                var index = s.subscriptions.indexOf(req.params.id);
                if (index > -1) {
                    s.subscriptions.splice(index, 1);
                }
                console.log(s.subscriptions)
        })
    } catch (err) {
        res.json({err});

    }
}
