import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'

export default class SummaryScreen extends Component {
  render() {
    const { players, backToStart, startGame } = this.props
    return (
      <React.Fragment>
        {players.map((player, index) => {
          return (
            <React.Fragment key={index}>
              <SummaryCard player={player} />
            </React.Fragment>
          )
        })}
        <Button onClick={backToStart}>Back</Button>
        <Button onClick={startGame}>Add Round</Button>
      </React.Fragment>
    )
  }
}
