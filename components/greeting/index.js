import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchGreeting from '../../redux/action-creators/greeting'

class Greeting extends Component {
  constructor () {
    super()
    this.greetingUpdate = null
  }

  componentDidMount () {
    const updateTimeInMinutes = 5
    const updateInterval = 60000 * updateTimeInMinutes

    this.props.fetchGreeting()
    this.greetingUpdate = setInterval(() => {
      this.props.fetchGreeting()
    }, updateInterval)
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        {
          this.props.message &&
          <span>{this.props.message}</span>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ greeting }) => {
  return greeting
}

export default connect(mapStateToProps, { fetchGreeting })(Greeting)
