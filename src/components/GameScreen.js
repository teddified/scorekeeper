import React, { Component } from 'react'
import EditCard from './EditCard'
import ResetButton from './ResetButton'
import styled from 'styled-components'

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
      backToStart,
      saveRound,
      startSummary,
    } = this.props

    return (
      <React.Fragment>
        {players.map((name, index) => {
          return (
            <EditCard
              key={index}
              {...name}
              players={players}
              updateScore={value => updateScore(index, value)}
              deletePlayer={() => deletePlayer(index)}
              saveRound={() => saveRound}
              startSummary={startSummary}
            />
          )
        })}
        <ResetButton onClick={resetScore}>Reset</ResetButton>
        <StyledBackButton onClick={backToStart}>Back</StyledBackButton>
      </React.Fragment>
    )
  }

  render() {
    return <React.Fragment>{this.renderEditCard()}</React.Fragment>
  }
}
