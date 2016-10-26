import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { reducer, initStore } from '../redux/store'
import components from '../data/components'
import Mirror from '../components/mirror'

export default class App extends Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducer, { components }, isServer)
    return  { initialState: store.getState(), isServer }
  }
  constructor (props) {
    super(props)
    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render () {
    return (
      <Provider store={this.store}>
        <Mirror />
      </Provider>
    )
  }
}
