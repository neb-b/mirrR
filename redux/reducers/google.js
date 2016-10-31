const google = (state = {}, { type, payload }) => {
  switch (type) {
    case 'GOOGLE':
      return payload
    default:
      return state
  }
}

export default google
