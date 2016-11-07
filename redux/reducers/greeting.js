import { GET_GREETING } from '../constants'

const greeting = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_GREETING:
      return payload
    default:
      return state
  }
}

export default greeting
