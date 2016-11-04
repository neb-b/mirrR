import { GET_COMPONENTS, UPDATE_COMPONENTS } from '../constants'

const components = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_COMPONENTS:
      return payload
    case UPDATE_COMPONENTS:
      return payload
    default:
      return state
  }
}

export default components
