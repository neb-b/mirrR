import React, { Component } from 'react'
import { connect } from 'react-redux'
import Greeting from './greeting'

class Mirror extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log("render", this.props)
    return (
      <div>
        <Greeting />
      </div>
    )
  }
}

export default connect((s) => s)(Mirror)
