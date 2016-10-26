import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

export const reducer = (state = { lastUpdate: 0, light: false }, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const initStore = (reducer, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
  } else {
    if (!window.store) {
      window.store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
    }
    return window.store
  }
}
