const components = (state = {}, { type, payload }) => {
  switch (type) {
    case 'FETCH_COMPONENTS':
      return payload
    case 'UPDATE_COMPONENTS':
      return payload
    default:
      return state
  }
}

export default components
