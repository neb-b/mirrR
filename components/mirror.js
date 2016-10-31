import React, { Component } from 'react'
import { connect } from 'react-redux'

import Google from './google'
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
        <Google />
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
