'use strict'

require('dotenv').config()
const express = require('express')
const router = express.Router()
const Twitter = require('twitter')

let client
if (process.env.TWITTER_CONSUMER_KEY &&
  process.env.TWITTER_CONSUMER_SECRET &&
  process.env.TWITTER_ACCESS_TOKEN_KEY &&
  process.env.TWITTER_ACCESS_TOKEN_SECRET) {
   client = new Twitter({
     consumer_key: process.env.TWITTER_CONSUMER_KEY,
     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
     access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
     access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
   })
}

let savedTweets
router.get('/', function(req, res) {
  if (savedTweets) return res.send(savedTweets)

  if (client) {
    client.get('statuses/home_timeline', {count: 200}, function(err, tweets, response){
      if (err) return res.send({err: err})
      if (tweets[0].code === 88) return res.send({err: tweets[0].message})
      savedTweets = tweets
      res.send(tweets)
    })
  } else {
    res.send({err: 'NO TWEETS'})
  }
})



module.exports = router
