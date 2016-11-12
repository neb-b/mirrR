import { GET_GOOGLE, GET_GOOGLE_ERROR } from '../constants'

const google = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_GOOGLE:
      return payload

    case GET_GOOGLE_ERROR:
      return {
        error: true
      }

    default:
      return state
  }
}

export default google
