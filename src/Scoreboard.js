import React, { Component } from 'react'
import Score from './Score'
import User from './User'

import ScoreUpdater from './ScoreUpdater'

export default class Scoreboard extends Component {
  render() {
    const { user, score, updateScore } = this.props
    return (
      <div clssName="scoreBoard">
        <div className="title">
          <User name={user} />
          <Score value={score} />
        </div>
        <ScoreUpdater onClick={updateScore} />
      </div>
    )
  }
}
