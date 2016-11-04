require('es6-promise').polyfill()
require('isomorphic-fetch')
import { GET_TWITTER } from '../constants'

export default async function fetchGoogle () {
  const res = await fetch('http://localhost:5000/twitter')
  const data = await res.json()

  return {
    type: GET_TWITTER,
    payload: { tweets: data }
  }
}
