require('es6-promise').polyfill()
require('isomorphic-fetch')
import { GET_NEWS } from '../constants'

export default async function fetchNews () {
  const res = await fetch('http://localhost:5000/news')
  const data = await res.json()

  return {
    type: GET_NEWS,
    payload: { data }
  }
}
