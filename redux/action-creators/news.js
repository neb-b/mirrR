require('es6-promise').polyfill()
require('isomorphic-fetch')
import { GET_NEWS, GET_NEWS_ERROR, URL } from '../constants'

export default async function fetchNews () {
  try {
    const res = await fetch(`${URL}/news`)
    const data = await res.json()

    return {
      type: GET_NEWS,
      payload: { data }
    }
  } catch (err) {
    return {
      type: GET_NEWS_ERROR,
      payload: err
    }
  }
}
