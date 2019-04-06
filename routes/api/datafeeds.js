const express = require('express')
const router=express.Router();
const dataFeedsCtrl = require('../../controllers/dataFeeds')

router.get('/', dataFeedsCtrl.getAllFeeds)
router.post('/', dataFeedsCtrl.create)

module.exports = router;