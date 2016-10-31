const weather = (state = {}, { type, payload }) => {
  switch (type) {
    case 'WEATHER':
      return payload
    default:
      return state
  }
}

export default weather
