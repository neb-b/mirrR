import { GET_NEWS, GET_NEWS_ERROR } from '../constants'

const news = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_NEWS:
      return payload

    case GET_NEWS_ERROR:
      return {error: true}

    default:
      return state
  }
}

export default news
