const medicareService = require('./medicare-lead.service')

const MedicareController = {
  sendApi: async (req, res) => {
    try {
      const pingResult = await medicareService.sendPingApi(req.body)
      console.log('MedicareController pingResult', pingResult)
      //   if (pingResult.status === 'SUCCESS') {
      //     const postResult = await medicareService.sendPostApi(
      //       req.body,
      //       pingResult.pingId,
      //     )
      //     console.log('MedicareController pingResult', postResult)
      //     return res.send(postResult)
      //   }
      return res.send(pingResult)
    } catch (error) {
      const result = JSON.parse(JSON.stringify(error))
      return res.status(result.status).send(result.message)
    }
  },
}

module.exports = MedicareController
