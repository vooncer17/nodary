var Node = require('../models/node')

module.exports = {
    create
}

async function create(req, res) {
    console.log('HITTING')
    try {
        await Node.create(req.body)
    } catch (err) {
        res.json({err});
    }
}