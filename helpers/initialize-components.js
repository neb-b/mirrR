require('es6-promise').polyfill()
require('isomorphic-fetch')

const initializeComponents = (components) => {
  fetch('http://localhost:5000/components/initial', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ components })
  })
  .catch((err) => console.error(err))
}

export default initializeComponents
