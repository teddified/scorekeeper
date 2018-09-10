import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'
import { Link } from 'react-router-dom'

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
        <Link to="/">
          <Button onClick={backToStart}>Back</Button>
        </Link>
        <Link to="/game">
          <Button onClick={startGame}>Add Round</Button>
        </Link>
      </React.Fragment>
    )
  }
}
