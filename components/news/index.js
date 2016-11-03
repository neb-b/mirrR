import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchNews from '../../redux/action-creators/news'
import ApiMessage from '../api-message'

class News extends Component {
  constructor(props) {
    super(props)
    this.newsUpdate = null
  }

  componentDidMount() {
    this.props.fetchNews()

    const updateTimeInHours = 3
    const updateInterval = 3600000 * updateTimeInHours

    this.newsUpdate = setInterval(this.props.fetchNews, updateInterval)
  }

  componentWillUnmount() {
    if (this.newsUpdate) clearInterval(this.newsUpdate)
  }

  _renderStory(story) {
    return (
      <div key={story.url}>
        <p>{story.title}</p>
        <p>{story.abstract}</p>
      </div>
    )
  }

  _renderNews(news) {
    return (
      <div>
        {
          news.data
            .slice(0, 3)
            .map(this._renderStory)
        }
      </div>
    )
  }

  render() {
    const { news } = this.props
    return (
      <div>
        {
          news.data && !news.data.err
            ? this._renderNews(news)
            : <ApiMessage component="news" />
        }
      </div>
    )
  }
}

function mapStateToProps({ news }) {
  return { news }
}

export default connect(mapStateToProps, { fetchNews })(News)
