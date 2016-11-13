require('es6-promise').polyfill()
require('isomorphic-fetch')
import { GET_GOOGLE, GET_GOOGLE_ERROR } from '../constants'

export default async function fetchGoogle () {
  try {
    const res = await fetch(`${URL}/google`)
    const data = await res.json()
    const trends = data.weeksList[data.weeksList.length - 1].daysList

    return {
      type: GET_GOOGLE,
      payload: { trends }
    }
  } catch (err) {
    return {
      type: GET_GOOGLE_ERROR,
      payload: err
    }
  }
}
