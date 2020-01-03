'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = { time: 0 }
    this.timer = {}
  }

  componentWillReceiveProps (nextProps, nextContext) {
    console.log('componentWillReceiveProps timer', this.props, nextProps)
  }

  componentWillUpdate (nextProps, nextState, nextContext) {
    console.log('componentWillUpdate timer', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    // console.log('shouldComponentUpdate timer', this.state, nextState)
    return this.props.time !== nextProps.time
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', this.props, prevProps)
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    console.log('render timer')
    return (<div>Timer: {this.state.time}</div>)
  }
}

export default Timer
