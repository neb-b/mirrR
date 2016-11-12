import { GET_WEATHER, GET_WEATHER_ERROR } from '../constants'

const weather = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_WEATHER:
      return payload

    case GET_WEATHER_ERROR:
      return {error: true}

    default:
      return state
  }
}

export default weather
