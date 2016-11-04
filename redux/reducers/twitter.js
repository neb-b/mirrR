const twitter = (state = {}, { type, payload }) => {
  switch (type) {
    case 'GET_TWEETS':
      return payload
    default:
      return state
  }
}

export default twitter
