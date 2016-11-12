import { GET_TWITTER, GET_TWITTER_ERROR } from '../constants'

const twitter = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_TWITTER:
      return payload

    case GET_TWITTER_ERROR:
      return {error: true}

    default:
      return state
  }
}

export default twitter
