var DataFeed = require('../models/datafeed')

module.exports = {
    create,
    getAllFeeds
}

async function create(req, res) {
    try {
        await DataFeed.create(req.body);
        getAllFeeds(req, res);
    } catch (err) {
        res.json({err});
    }
}

async function getAllFeeds(req, res) {
    const feeds = await DataFeed.find({})
    .sort({reputation: 1, upTime: 1})
    .limit(req.query.limit || 20)
    res.json(scores)
}

