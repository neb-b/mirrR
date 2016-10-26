import React, { Component } from 'react'
import { connect } from 'react-redux'

class Mirror extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log("render", this.props)
    return (
      <div>
        Mirror
      </div>
    )
  }
}

export default connect((s) => s)(Mirror)
