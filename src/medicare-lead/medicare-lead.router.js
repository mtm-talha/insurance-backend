const express = require('express')
const router = express.Router()
const medicareController = require('./medicare-lead.controller')

router.get('/', function (req, res) {
  res.status(200).json({
    message: 'Api is working',
  })
})

router.post('/sendPingApi', medicareController.sendPingApi)
router.post('/sendPostApi', medicareController.sendPostApi)
module.exports = router
