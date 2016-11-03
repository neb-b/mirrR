'use strict'

require('dotenv').config()
const express = require('express')
const router = express.Router()
const nytTop = require('nyt-top')
let APIKey

if (process.env.NYT_API_KEY) {
  APIKey = process.env.NYT_API_KEY
  nytTop.key(APIKey)
}

router.get('/', function(req, res) {
  if (APIKey) {
    nytTop.section('home', function (err, data) {
      if (err) return res.send(err)
      res.send(data.results)
    })
  } else {
    res.send({err: 'NO NEWS'})
  }
})



module.exports = router
