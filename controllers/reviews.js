var DataFeed = require('../models/datafeed')

module.exports = {
    create
}

async function create(req, res) {
    try {
        const feed = await DataFeed.findById(req.params.id)
        feed.comments.push(req.body)
        feed.save()
    } catch (err) {
    return res.status(400).json(err)
    }
}