import React, { Component } from 'react'
import styled from 'styled-components'
import Score from './Score'
import User from './User'
import Button from './Button'

import ScoreUpdater from './ScoreUpdater'

const StyledScoreBoard = styled.div`
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  background: white;
`

export default class Scoreboard extends Component {
  render() {
    const { name, score, updateScore, deletePlayer } = this.props
    return (
      <StyledScoreBoard>
        <div className="title">
          <User name={name} />
          <Score value={score} />
        </div>
        <ScoreUpdater onClick={updateScore} />
        <Button onClick={deletePlayer}>delete</Button>
      </StyledScoreBoard>
    )
  }
}
