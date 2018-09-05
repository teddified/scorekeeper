import React, { Component } from 'react'
import Scoreboard from './Scoreboard'
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
  render() {
    const {
      players,
      updateScore,
      deletePlayer,
      resetScore,
      backToStart,
    } = this.props
    return (
      <React.Fragment>
        {players.map((name, index) => {
          return (
            <Scoreboard
              key={index}
              {...name}
              updateScore={value => updateScore(index, value)}
              deletePlayer={() => deletePlayer(index)}
            />
          )
        })}
        <ResetButton onClick={resetScore}>Reset</ResetButton>
        <StyledBackButton onClick={backToStart}>Back</StyledBackButton>
      </React.Fragment>
    )
  }
}
