const google = (state = {}, { type, payload }) => {
  switch (type) {
    case 'GET_NEWS':
      return payload
    default:
      return state
  }
}

export default google
