import React, { Component } from 'react'
import moment from 'moment'

export default class Greeting extends Component {
  constructor () {
    super()
    this.greetingUpdate = null
    this.state = {
      greetingMsg: this.getGreetingMsg()
    }
  }

  componentDidMount () {
    const updateTimeInMinutes = 5
    const updateInterval = 60000 * updateTimeInMinutes

    this.greetingUpdate = setInterval(() => {
      this.setState({ greetingMsg: this.getGreetingMsg()})
    }, updateInterval)
  }

  getGreetingMsg () {
    const time = Number(moment().format('HH').split(' ')[0])
    if (time < 4) return "Good night"
    if (time < 10) return "Good morning"
    if (time < 16) return "Good afternoon"
    return "Good evening"
  }

  render() {
    return (
      <div>
        {this.state.greetingMsg}
      </div>
    )
  }
}
