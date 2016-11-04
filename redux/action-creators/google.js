require('es6-promise').polyfill()
require('isomorphic-fetch')
import { GET_GOOGLE } from '../constants'

export default async function fetchGoogle () {
  const res = await fetch('http://localhost:5000/google')
  const data = await res.json()
  const trends = data.weeksList[data.weeksList.length - 1].daysList

  return {
    type: GET_GOOGLE,
    payload: { trends }
  }
}
