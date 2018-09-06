import React, { Component } from 'react'
import styled from 'styled-components'
import Score from './Score'
import User from './User'
import Button from './Button'
import ScoreUpdater from './ScoreUpdater'

const StyledEditCard = styled.div`
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  background: white;
`

export default class EditCard extends Component {
  render() {
    const { name, score, updateScore, deletePlayer } = this.props
    return (
      <StyledEditCard>
        <div className="title">
          <User name={name} />
          <Score score={score} />
        </div>
        <ScoreUpdater onClick={updateScore} />
        <Button onClick={deletePlayer}>delete</Button>
      </StyledEditCard>
    )
  }
}
