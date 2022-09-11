const express = require('express')
const router = express.Router()
const autoLeadController = require('./auto-lead.controller')

router.get('/', function (req, res) {
  res.status(200).json({
    message: 'Api is working',
  })
})

router.post('/sendApi', autoLeadController.sendApi)

module.exports = router
