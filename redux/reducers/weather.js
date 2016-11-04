import { GET_WEATHER } from '../constants'

const weather = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_WEATHER:
      return payload
    default:
      return state
  }
}

export default weather
