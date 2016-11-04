import { GET_GOOGLE } from '../constants'

const google = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_GOOGLE:
      return payload
    default:
      return state
  }
}

export default google
