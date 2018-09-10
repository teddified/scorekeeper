import React, { Component } from 'react'

export default class Score extends Component {
  render() {
    const { player } = this.props
    return <div className="score">{player.roundscore}</div>
  }
}
