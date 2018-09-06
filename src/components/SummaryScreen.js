import React, { Component } from 'react'
import SummaryCard from './SummaryCard'

export default class SummaryScreen extends Component {
  render() {
    const { players } = this.props
    return (
      <React.Fragment>
        {players.map((player, index) => {
          return (
            <React.Fragment key={index}>
              <SummaryCard player={player} />
            </React.Fragment>
          )
        })}
      </React.Fragment>
    )
  }
}
