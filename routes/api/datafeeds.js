const express = require('express')
const router=express.Router();
const dataFeedsCtrl = require('../../controllers/datafeeds')

router.get('/', dataFeedsCtrl.getAllFeeds)


/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'))
router.post('/', checkAuth, dataFeedsCtrl.create)
router.post('/subscribe', checkAuth, dataFeedsCtrl.subscribe)


function checkAuth(req, res, next) {
    console.log('USER', req.user)
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;