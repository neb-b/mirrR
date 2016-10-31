'use strict'

const express = require('express')
const router = express.Router()
const googleTrends = require('google-trends-api')

router.get('/', function(req, res, next) {
  googleTrends.top30in30(function(error, results) {
    res.status(error ? 400 : 200).send(error || results);
  })
})

module.exports = router
