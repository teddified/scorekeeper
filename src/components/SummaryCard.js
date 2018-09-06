import React, { Component } from 'react'
import PlayerHeader from './PlayerHeader'
import RoundBar from './RoundBar'

export default class SummaryCard extends Component {
  render() {
    const { player } = this.props
    return (
      <div>
        <PlayerHeader player={player} />
        <RoundBar player={player} />
      </div>
    )
  }
}
