import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchTweets from '../../redux/action-creators/twitter'
import ApiMessage from '../api-message'
import stringToDate from './twitter-date'

import {
  twitterWrapper,
  tweet
} from './twitter.style'

class TwitterFeed extends Component {
  constructor(props) {
    super(props)
    this.twitterUpdate = null
  }

  componentDidMount() {
    this.props.fetchTweets()

    const updateTimeinMinutes = 5
    const twitterUpdateInterval = 60000 * updateTimeinMinutes
    this.twitterUpdate = setInterval(this.props.fetchTweets, twitterUpdateInterval)
  }

  componentWillUnmount() {
    if (this.twitterUpdate) clearInterval(this.twitterUpdate)
  }

  _renderTweet(tweet) {
    return (
      <li className={tweet} key={tweet.id}>
        <div>{tweet.user.name}</div>
        <div>
          <span>@{tweet.user.screen_name}</span>
          <span>{stringToDate(tweet.created_at)}</span>
        </div>
        <div>
          <span>{tweet.retweeted_status ? tweet.retweeted_status.text : 'RT: ' + tweet.text}</span>
          {tweet.extended_entities ? <img className="twitter_img" src={tweet.extended_entities.media[0].media_url} /> : null}
        </div>
      </li>
    )
  }

  render() {
    const { tweets } = this.props
    return (
      <ul className={twitterWrapper}>
        {
          tweets && !tweets.err
          ? tweets.map(this._renderTweet)
          : <ApiMessage component="Twitter" />
        }
      </ul>
    )
  }
}

function mapStateToProps({ twitter: { tweets }}) {
  return { tweets }
}

export default connect(mapStateToProps, { fetchTweets })(TwitterFeed)