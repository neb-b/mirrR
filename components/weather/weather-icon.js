import React from 'react'
import { weatherIcon } from './weather.style'

export default (currentSky) => {
  // clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night
  let icon

  switch (currentSky) {
    case 'clear-day':
      icon='clear-day.png'
      break
    case 'clear-night':
      icon='clear-night.png'
      break
    case 'rain':
      icon='rain.png'
      break
    // case 'snow':
    //   icon='snow.png'
    //   break
    // case 'sleet':
    //   icon='sun-icon.png'
    //   break
    // case 'wind':
    //   icon='sun-icon.png'
    //   break
    // case 'fog':
    //   icon='sun-icon.png'
    //   break
    case 'cloudy':
      icon='cloudy.png'
      break
    case 'partly-cloudy-day':
      icon='partly-cloudy-day.png'
      break
    case 'partly-cloudy-night':
      icon='clear-night.png'
      break

    default: icon = 'clear-day.png'
  }

  return <img className={weatherIcon} src={`static/weather-icons/${icon}`} />
}
