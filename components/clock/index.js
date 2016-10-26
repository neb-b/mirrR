import React, { Component } from 'react'
import moment from 'moment'

export default class Clock extends Component {
  constructor() {
    super()
    this.timeUpdate = null
    this.timeFormat = 'h:mm a'
    this.dateFormat = 'ddd MMMM Do'

    this.state = {
      time: moment().format(this.timeFormat),
      date: moment().format(this.dateFormat)
    }
  }

  componentDidMount() {
    this.timeUpdate = setInterval(this.updateTime.bind(this), 1000)
  }

  componentWillUnmount() {
    if (this.timeUpdate) clearInterval(this.timeUpdate)
  }

  updateTime() {
    this.setState({
      time: moment().format(this.timeFormat),
      date: moment().format(this.dateFormat)
    })
  }

  render () {
    return (
      <div className="time">
        <h1 className="clock">{this.state.time}</h1>
        <h3 className="date">{this.state.date}</h3>
      </div>
    )
  }
}
