const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const autoRouter = require('./src/auto-lead/auto-lead.router')
const medicareRouter = require('./src/medicare-lead/medicare-lead.router')
app.use(express.json({ limit: '250mb' }))
const server = require('http').Server(app)

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers     (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/health', (req, res) => {
  res.send('API server is working!')
})

autoRouter.all('*', cors(corsOptions))
medicareRouter.all('*', cors(corsOptions))
app.use('/auto', autoRouter)
app.use('/medicare', medicareRouter)
const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(
    `Listening on port ${port}...${process.env.PORT}....${process.env.NODE_ENV}`,
  )
})
