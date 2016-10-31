import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchGoogle from '../../redux/action-creators/google'


class Google extends Component {
  constructor(props) {
    super(props)
    this.googleUpdate = null
  }

  componentDidMount() {
    this.props.fetchGoogle()

    const updateTimeInHours = 3
    const updateInterval = 3600000 * updateTimeInHours

    this.googleUpdate = setInterval(this.props.fetchGoogle, updateInterval)
  }

  componentWillUnmount() {
    if (this.googleUpdate) clearInterval(this.googleUpdate)
  }

  _renderTrend(trend) {
    const { title, hotnessColor } = trend.data.trend
    return (
      <li key={trend.date}>
        <span>{trend.longFormattedDate}</span>
        <span style={{color: hotnessColor}}>{title}</span>
      </li>
    )
  }

  render() {
    return (
      <ul className="google_trends">
        {
          this.props.trends &&
          this.props.trends
            .filter(trend => trend.data)
            .map(this._renderTrend)
        }
      </ul>
    )
  }
}

function mapStateToProps({ trends }) {
  return { trends }
}

export default connect(mapStateToProps, { fetchGoogle })(Google)
