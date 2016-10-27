import React, { Component } from 'react'
import { connect } from 'react-redux'

import Greeting from './greeting'
import Weather from './weather'
import Clock from './clock'

class Mirror extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log("render", this.props)
    return (
      <div>
        <Greeting />
        <Weather />
        <Clock />
      </div>
    )
  }
}

export default connect((s) => s)(Mirror)
