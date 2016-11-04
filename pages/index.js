import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import { reducers, initStore } from '../redux/store'
import Mirror from '../components/mirror'
import { insertRule } from 'next/css'

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
      <div>
        <Head>
          <title>mirrR</title>
          <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" />
        </Head>
        <Provider store={this.store}>
          <Mirror />
        </Provider>
      </div>
    )
  }
}

// Global CSS rule
insertRule("html, body { margin: 0; padding: 0; font-family: 'Lato', sans-serif; }")
