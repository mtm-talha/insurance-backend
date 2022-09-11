// await-request.js
const request = require('request')

module.exports = async (value) =>
  // eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) => {
    request(value, (error, response, data) => {
      console.log('response', response.statusCode)
      resolve({ error, response, data })
      //   if (error) reject({ error, response })
      //   else resolve(data)
    })
  })
