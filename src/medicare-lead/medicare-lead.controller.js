const medicareService = require('./medicare-lead.service')

const MedicareController = {
  sendPingApi: async (req, res) => {
    try {
      const pingResult = await medicareService.sendPingApi(req.body)
      console.log('MedicareController pingResult', pingResult)
      return res.send(pingResult)
    } catch (error) {
      const result = JSON.parse(JSON.stringify(error))
      return res.status(result.statusCode).send(result)
    }
  },
  sendPostApi: async (req, res) => {
    try {
      const postResult = await medicareService.sendPostApi(req.body)
      console.log('MedicareController postResult', postResult)
      return res.send(postResult)
    } catch (error) {
      const result = JSON.parse(JSON.stringify(error))
      return res.status(result.statusCode).send(result)
    }
  },
}

module.exports = MedicareController
