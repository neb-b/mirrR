import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { reducers, initStore } from '../redux/store'
import Mirror from '../components/mirror'

export default class App extends Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducers, {}, isServer)
    return  { initialState: store.getState(), isServer }
  }
  constructor (props) {
    super(props)
    this.store = initStore(reducers, props.initialState, props.isServer)
  }

  render () {
    return (
      <Provider store={this.store}>
        <Mirror />
      </Provider>
    )
  }
}
