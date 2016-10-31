import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger()

export const reducer = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}

export const initStore = (reducer, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(reducer, initialState, applyMiddleware(thunkMiddleware, promise, logger))
  } else {
    if (!window.store) {
      window.store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware, promise, logger))
    }
    return window.store
  }
}
