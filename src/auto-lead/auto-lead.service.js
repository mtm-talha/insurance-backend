'use strict'
const config = require('../../config/dataPass.config')
const requestUrl = require('../../common/await-request')
const AutoLeadService = {
  sendPingApi: async (body) => {
    const options = {
      method: 'POST',
      url: `${config.dataPass.auto_lead_ping_url}?quadTag=${config.quadTag}`,
      headers: config.dataPass.headers,
      body: JSON.stringify(body),
    }
    const { error, response, data } = await requestUrl(options)
    if (!error && response.statusCode == 200) {
      console.log('AutoLeadService ping successfully api called')
      console.log('response', JSON.stringify(response))
      return data
    } else {
      console.log(
        'AutoLeadService error status code on ping api',
        JSON.stringify(response.statusCode),
      )
      throw response
    }
  },
  sendPostApi: async (body) => {
    const options = {
      method: 'POST',
      url: `${config.dataPass.auto_lead_post_url}?quadTag=${config.quadTag}`,
      headers: config.dataPass.headers,
      body: JSON.stringify(body),
    }
    const { error, response, data } = await requestUrl(options)
    if (!error && response.statusCode == 200) {
      console.log('AutoLeadService post successfully api called')
      console.log('response', JSON.stringify(response))
      return data
    } else {
      console.log(
        'AutoLeadService error status code on post api',
        JSON.stringify(response.statusCode),
      )
      throw response
    }
  },
}

module.exports = AutoLeadService
