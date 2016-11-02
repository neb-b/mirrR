require('es6-promise').polyfill()
require('isomorphic-fetch')

export default async function fetchComponents () {
  const res = await fetch('http://localhost:5000/components')
  const components = await res.json()

  return {
    type: 'FETCH_COMPONENTS',
    payload: { components }
  }
}
