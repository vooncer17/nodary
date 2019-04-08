const express = require('express')
const router=express.Router();
const dataFeedsCtrl = require('../../controllers/dataFeeds')

router.get('/', dataFeedsCtrl.getAllFeeds)

/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'))
router.post('/', checkAuth, dataFeedsCtrl.create)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;