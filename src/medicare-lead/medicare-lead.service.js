'use strict'
const config = require('../../config/dataPass.config')
const axios = require('axios')
const MedicareService = {
  sendPingApi: async (body) => {
    const options = {
      url: `${config.dataPass.medicare_lead_ping_url}?quadTag=${config.quadTag}`,
      headers: config.dataPass.headers,
      body: JSON.stringify(body),
    }
    try {
      const response = await axios.post(
        options.url,
        {
          headers: options.headers,
        },
        options.body,
      )
      console.log('MedicareService ping successfully api called')
      console.log('response', JSON.stringify(response))
      console.log('statusCode', response.data.statusCode)
      return response.data.body
    } catch (error) {
      console.log('MedicareService error on ping api', JSON.stringify(error))
      throw error
    }
  },
  sendPostApi: async (body, pingId) => {
    const data = {
      ...body,
      metaData: {
        ...body.metaData,
        pingId,
      },
    }

    const options = {
      url: `${config.dataPass.medicare_lead_post_url}?quadTag=${config.quadTag}`,
      headers: config.dataPass.headers,
      body: JSON.stringify(data),
    }
    try {
      const response = await axios.post(
        options.url,
        {
          headers: options.headers,
        },
        options.body,
      )
      console.log('MedicareService POST successfully api called')
      console.log('response', JSON.stringify(response))
      console.log('statusCode', response.data.statusCode)
      return response.data.body
    } catch (error) {
      console.log('MedicareService error on POST api', JSON.stringify(error))
      throw error
    }
  },
}

module.exports = MedicareService
