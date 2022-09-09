const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const requestUrl = require('request')

const port = 4000
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// }
// app.use(cors(corsOptions))

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200, // some legacy browsers     (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// const { createProxyMiddleware } = require('http-proxy-middleware')
// app.use(
//   '/api',
//   createProxyMiddleware({
//     target: 'http://localhost:3000/', //original url
//     changeOrigin: true,
//     //secure: false,
//     onProxyRes: function (proxyRes, req, res) {
//       proxyRes.headers['Access-Control-Allow-Origin'] = '*'
//     },
//   }),
// )
app.get('/', (req, res) => {
  res.send('Hello World')
})
// app.get('/', (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Access-Control-Allow-Credentials', 'true')
//   res.setHeader('Access-Control-Max-Age', '1800')
//   res.setHeader('Access-Control-Allow-Headers', 'content-type')
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'PUT, POST, GET, DELETE, PATCH, OPTIONS',
//   )
// })

app.post('/medicare', (req, res) => {
  const quadTagValue = `http://o1.stage.qnsr.com/cgi/r?;n=420;c=1000642;s=3907;x=7936;f=201510051136240;u=j;z=TIMESTAMP`

  const options = {
    method: 'POST',
    url: `http://datapass.quinstage.com/leads/auto/ping?quadTag=${quadTagValue}`,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(req.body),
  }

  requestUrl(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('sucessfully api called')

      console.log('statusCode', body.statusCode)
      console.log('body', body)
      res.send(body)
    } else {
      console.log('Error ' + error)
      console.log('statusCode ' + response.statusCode)
      console.log('response ' + JSON.stringify(response))
      res.send(response)
    }
  })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
