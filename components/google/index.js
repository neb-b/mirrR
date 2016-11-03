import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchGoogle from '../../redux/action-creators/google'
import {
  ul,
  li,
  trend
} from './google.style'

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
      <li className={li} key={trend.date}>
        <span style={{fontSize: '.8em'}}>{trend.longFormattedDate}</span>
        <span style={{color: hotnessColor, paddingLeft: 10}}>{title}</span>
      </li>
    )
  }

  render() {
    return (
      <ul className={ul}>
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

function mapStateToProps({ google: { trends } }) {
  return { trends }
}

export default connect(mapStateToProps, { fetchGoogle })(Google)
