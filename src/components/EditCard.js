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
  renderCard() {
    const { updateScore, deletePlayer, player } = this.props
    console.log(player)
    return (
      <StyledEditCard>
        <div className="title">
          <User player={player} />
          <Score player={player} />
        </div>
        <ScoreUpdater onClick={updateScore} />
        <Button onClick={deletePlayer}>delete</Button>
      </StyledEditCard>
    )
  }

  render() {
    return <React.Fragment>{this.renderCard()}</React.Fragment>
  }
}
