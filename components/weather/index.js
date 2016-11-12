import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchWeather from '../../redux/action-creators/weather'
import WeatherIcon from './weather-icon'
import ApiMessage from '../api-message'
import {
  weatherWrapper,
  weatherH1
} from './weather.style'

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
        <h1 className={weatherH1}>{currently.apparentTemperature.toFixed(0)}&deg;</h1>
        <WeatherIcon icon={currently.icon} />
        <p>{daily.summary}</p>
      </div>
    )
  }

  render() {
    const { error, weather } = this.props

    return (
      <div className={weatherWrapper}>
        {
          !error && Object.keys(weather).length && !weather.err
          ? this._renderWeather(weather)
          : <ApiMessage component="weather" />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather }
}

export default connect(mapStateToProps, { fetchWeather })(Weather)
