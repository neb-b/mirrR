import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import weather from './reducers/weather'
import google from './reducers/google'
import components from './reducers/components'
import news from './reducers/news'

const logger = createLogger()

export const reducers = combineReducers({
  weather,
  google,
  components,
  news
})

export const initStore = (reducers, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(reducers, initialState, applyMiddleware(thunkMiddleware, promise, logger))
  } else {
    if (!window.store) {
      window.store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware, promise, logger))
    }
    return window.store
  }
}
