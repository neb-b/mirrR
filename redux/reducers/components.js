const components = (state = {}, { type, payload }) => {
  switch (type) {
    case 'UPDATE_COMPONENTS':
      return payload
    default:
      return state
  }
}

export default components
