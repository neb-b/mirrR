import { GET_NEWS } from '../constants'

const news = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_NEWS:
      return payload
    default:
      return state
  }
}

export default news
