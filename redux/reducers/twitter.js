import { GET_TWITTER } from '../constants'

const twitter = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_TWITTER:
      return payload
    default:
      return state
  }
}

export default twitter
