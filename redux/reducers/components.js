import {
  GET_COMPONENTS,
  GET_COMPONENTS_ERROR,
  UPDATE_COMPONENTS,
  UPDATE_COMPONENTS_ERROR
} from '../constants'

const components = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_COMPONENTS:
      return payload

    case UPDATE_COMPONENTS:
      return payload

    case GET_COMPONENTS_ERROR:
    case UPDATE_COMPONENTS_ERROR:
      return {error: true}

    default:
      return state
  }
}

export default components
