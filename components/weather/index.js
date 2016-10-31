import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchWeather from '../../redux/action-creators/weather'
import WeatherIcon from './weather-icon'

class Weather extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchWeather()
  }

  _renderWeather({ currently, daily }) {
    return (
      <div>
        <h1>{currently.apparentTemperature.toFixed(0)}&deg;</h1>
        <WeatherIcon icon={currently.icon} />
        <p>{daily.summary}</p>
      </div>
    )
  }

  render() {
    const { weather } = this.props
    return (
      <div>
        {
          Object.keys(weather).length &&
          this._renderWeather(weather)
        }
      </div>
    )
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather }
}

export default connect(mapStateToProps, { fetchWeather })(Weather)
