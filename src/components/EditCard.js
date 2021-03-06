import React, { Component } from 'react'
import styled from 'styled-components'
import User from './User'
import Button from './Button'
import ScoreUpdater from './ScoreUpdater'
import PropTypes from 'prop-types'

const StyledEditCard = styled.div`
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  background: white;
`

const StyledScore = styled.div`
  display: flex;
  justify-content: center;
  font-size: 72px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export default class EditCard extends Component {
  static propTypes = {
    updateScore: PropTypes.func,
    deletePlayer: PropTypes.func,
    player: PropTypes.array,
  }

  renderCard() {
    const { updateScore, deletePlayer, player } = this.props
    return (
      <StyledEditCard>
        <div className="title">
          <User player={player} />
          <StyledScore>{player.roundscore}</StyledScore>
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
