'use strict'
const config = require('../../config/dataPass.config')
const axios = require('axios')

const AutoLeadService = {
  sendPingApi: async (body) => {
    const options = {
      url: `${config.dataPass.auto_lead_ping_url}?quadTag=${config.quadTag}`,
      headers: config.dataPass.headers,
      body: JSON.stringify(body),
    }
    try {
      const response = await axios.post(
        options.url,
        options.headers,
        options.body,
      )
      console.log('AutoLeadService ping successfully api called')
      console.log('response', JSON.stringify(response))
      console.log('statusCode', response.data.statusCode)
      return response.data.body
    } catch (error) {
      console.log('AutoLeadService error on ping api')
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
      url: `${config.dataPass.auto_lead_post_url}?quadTag=${config.quadTag}`,
      headers: config.dataPass.headers,
      body: JSON.stringify(data),
    }
    try {
      const response = await axios.post(
        options.url,
        options.headers,
        options.body,
      )
      console.log('AutoLeadService POST successfully api called')
      console.log('response', JSON.stringify(response))
      console.log('statusCode', response.data.statusCode)
      return response.data.body
    } catch (error) {
      console.log('AutoLeadService error on POST api')
      throw error
    }
  },
}

module.exports = AutoLeadService
