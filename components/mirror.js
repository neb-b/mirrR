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
    return (
      <div>
        <Greeting />
        <Weather />
        <Clock />
      </div>
    )
  }
}

const mapStateToProps = ({ components }) => {
  return { components }
}

export default connect(mapStateToProps)(Mirror)
