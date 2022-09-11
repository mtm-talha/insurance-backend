const autoLeadService = require('./auto-lead.service')

const AutoLeadController = {
  sendPingApi: async (req, res) => {
    try {
      const pingResult = await autoLeadService.sendPingApi(req.body)
      console.log('AutoLeadController pingResult', pingResult)
      return res.send(pingResult)
    } catch (error) {
      const result = JSON.parse(JSON.stringify(error))
      return res.status(result.statusCode).send(result)
    }
  },
  sendPostApi: async (req, res) => {
    try {
      const postResult = await autoLeadService.sendPostApi(req.body)
      console.log('AutoLeadController postResult', postResult)
      return res.send(postResult)
    } catch (error) {
      const result = JSON.parse(JSON.stringify(error))
      return res.status(result.statusCode).send(result)
    }
  },
}
module.exports = AutoLeadController
