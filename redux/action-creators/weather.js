require('es6-promise').polyfill()
require('isomorphic-fetch')
import { GET_WEATHER, GET_WEATHER_ERROR, URL } from '../constants'

export default async function fetchWeather () {
  try {
    const res = await fetch(`${URL}/weather`)
    const data = await res.json()

    return {
      type: GET_WEATHER,
      payload: data
    }
  } catch (err) {
    return {
      type: GET_WEATHER_ERROR,
      payload: err
    }
  }
}
