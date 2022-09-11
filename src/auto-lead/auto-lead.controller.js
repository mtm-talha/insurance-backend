const autoLeadService = require('./auto-lead.service')

const AutoLeadController = {
  sendApi: async (req, res) => {
    try {
      const pingResult = await autoLeadService.sendPingApi(req.body)
      console.log('AutoLeadController pingResult', pingResult)
      //   if (pingResult.status === 'SUCCESS') {
      //     const postResult = await autoLeadService.sendPostApi(
      //       req.body,
      //       pingResult.pingId,
      //     )
      //     console.log('AutoLeadController pingResult', postResult)
      //     return res.send(postResult)
      //   }
      return res.send(pingResult)
    } catch (error) {
      const result = JSON.parse(error)
      return res.status(result.status).send(result.message)
    }
  },
}
module.exports = AutoLeadController
