require('es6-promise').polyfill()
require('isomorphic-fetch')
import { GET_WEATHER } from '../constants'

export default async function fetchWeather () {
  const res = await fetch('http://192.168.1.10:5000/weather')
  const data = await res.json()

  return {
    type: GET_WEATHER,
    payload: data
  }
}
