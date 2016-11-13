require('es6-promise').polyfill()
require('isomorphic-fetch')
import { GET_TWITTER, GET_TWITTER_ERROR, URL } from '../constants'

export default async function fetchGoogle () {
  try {
    const res = await fetch(`${URL}/twitter`)
    const data = await res.json()

    return {
      type: GET_TWITTER,
      payload: { tweets: data }
    }
  } catch (err) {
    return {
      type: GET_TWITTER_ERROR,
      payload: err
    }
  }
}
