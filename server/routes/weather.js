'use strict'

require('dotenv').config()
const express = require('express')
const router = express.Router()
const Forecast = require('forecast.io')
const publicIp = require('public-ip')
const freegeoip = require('node-freegeoip')
let APIKey
let location
let forecast

if (process.env.DARKSKY_API_KEY) {
  const options = {
    APIKey: process.env.DARKSKY_API_KEY
  }
  forecast = new Forecast(options)
}

router.get('/', function(req, res) {
  getWeather(function (err, weather) {
    if (err) return res.send({err: err})
    res.send(weather)
  })
})

function getLocation() {
  publicIp.v4().then((ip) => {
    freegeoip.getLocation(ip, function(err, payload) {
      location = {
        lat: payload.latitude,
        lon: payload.longitude
      }
    });
  })
}
getLocation()


function getWeather(cb) {
  if (!location) return cb('NO LOCATION')
  if (!forecast) return cb('NO API KEY')

  forecast.get(location.lat, location.lon, function (err, res, data) {
    if (err) return cb(err)
    cb(null, data)
  })
}


module.exports = router
