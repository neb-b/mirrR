require('es6-promise').polyfill()
require('isomorphic-fetch')
import { GET_COMPONENTS, UPDATE_COMPONENTS } from '../constants'

export default async function fetchComponents () {
  const res = await fetch('http://localhost:5000/components')
  const components = await res.json()

  return {
    type: GET_COMPONENTS,
    payload: { components }
  }
}

export const updateComponents = (newComponents) => {
  return {
    type: UPDATE_COMPONENTS,
    payload: { components: newComponents }
  }
}
