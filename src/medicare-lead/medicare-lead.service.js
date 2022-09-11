'use strict'
const config = require('../../config/dataPass.config')
const requestUrl = require('../../common/await-request')

const MedicareService = {
  sendPingApi: async (body) => {
    const options = {
      method: 'POST',
      url: `${config.dataPass.medicare_lead_ping_url}?quadTag=${config.quadTag}`,
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
  sendPostApi: async (body, pingId) => {
    const payload = {
      ...body,
      metaData: {
        ...body.metaData,
        pingId,
      },
    }

    const options = {
      method: 'POST',
      url: `${config.dataPass.medicare_lead_post_url}?quadTag=${config.quadTag}`,
      headers: config.dataPass.headers,
      body: JSON.stringify(payload),
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

module.exports = MedicareService
