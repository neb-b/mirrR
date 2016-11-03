'use strict'

const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
server.listen(5000)
console.log('server running on port 5000')

// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.use(function(req, res, next) {
  req.io = io
  next()
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/components', require('./routes/components'))
app.use('/google', require('./routes/google'))
app.use('/weather', require('./routes/weather'))
app.use('/news', require('./routes/news'))

io.on('connection', function (socket) {
  console.log('connected to mirror')
})
