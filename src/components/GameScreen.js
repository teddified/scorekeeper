import React, { Component } from 'react'
import EditCard from './EditCard'
import ResetButton from './ResetButton'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from './Button'

const StyledBackButton = styled.button`
  width: 100px;
  height: 40px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  background: aliceblue;
  border-radius: 10px;
`

export default class GameScreen extends Component {
  renderEditCard() {
    const {
      players,
      updateScore,
      deletePlayer,
      resetScore,
      saveRound,
      startSummary,
    } = this.props

    return (
      <React.Fragment>
        {players.map((player, index) => {
          return (
            <EditCard
              key={index}
              // {...player}
              player={player}
              players={players}
              updateScore={value => updateScore(index, value)}
              deletePlayer={() => deletePlayer(index)}
              startSummary={startSummary}
            />
          )
        })}
        <Link to="/summary">
          <Button onClick={saveRound}>Save Round</Button>
        </Link>
        <ResetButton onClick={resetScore}>Reset</ResetButton>
        <Link to="/summary">
          <StyledBackButton>Back</StyledBackButton>
        </Link>
      </React.Fragment>
    )
  }

  render() {
    return <React.Fragment>{this.renderEditCard()}</React.Fragment>
  }
}
