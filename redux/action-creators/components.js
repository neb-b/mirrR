require('es6-promise').polyfill()
require('isomorphic-fetch')
import {
  GET_COMPONENTS,
  GET_COMPONENTS_ERROR,
  UPDATE_COMPONENTS ,
  UPDATE_COMPONENTS_ERROR,
  URL
} from '../constants'

export default async function fetchComponents () {
  const res = await fetch(`${URL}/components`)
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
