import React, { Component } from 'react'

export default class Score extends Component {
  render() {
    const { score } = this.props
    return <div className="score">{score}</div>
  }
}
