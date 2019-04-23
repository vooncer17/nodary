const express = require('express')
const router = express.Router();
const nodesCtrl = require('../../controllers/nodes')

/*---------- Public Routes ----------*/
router.post('/', nodesCtrl.create);

module.exports = router;