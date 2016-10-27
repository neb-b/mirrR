import React, { Component } from 'react'

export default class Weather extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>80&deg;</h1>
        <p>This is some placeholder text for the daily summary</p>
      </div>
    )
  }
}
