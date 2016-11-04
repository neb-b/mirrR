require('es6-promise').polyfill()
require('isomorphic-fetch')

export default async function fetchGoogle () {
  const res = await fetch('http://localhost:5000/twitter')
  const data = await res.json()

  return {
    type: 'GET_TWEETS',
    payload: { tweets: data }
  }
}
