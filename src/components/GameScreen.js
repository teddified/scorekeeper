import React, { Component } from 'react'
import EditCard from './EditCard'
import ResetButton from './ResetButton'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const StyledBackButton = styled.button`
  width: 100px;
  height: 40px;
  color: black;
  font-size: 14px;
  font-weight: bold;
  background: aliceblue;
  border-radius: 10px;
`

const StyledSaveRoundButton = styled.button`
  width: 100px;
  height: 40px;
  color: black;
  font-size: 14px;
  font-weight: bold;
  background: aliceblue;
  border-radius: 10px;
`
const StyledButtonSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default class GameScreen extends Component {
  static propTypes = {
    players: PropTypes.array,
    updateScore: PropTypes.func,
    deletePlayer: PropTypes.func,
    resetScore: PropTypes.func,
    saveRound: PropTypes.func,
    startSummary: PropTypes.func,
  }

  renderEditCard() {
    const {
      players,
      updateScore,
      deletePlayer,
      resetScore,
      saveRound,
    } = this.props

    return (
      <React.Fragment>
        {players.map((player, index) => {
          return (
            <EditCard
              key={index}
              player={player}
              players={players}
              updateScore={value => updateScore(index, value)}
              deletePlayer={() => deletePlayer(index)}
            />
          )
        })}
        <StyledButtonSection>
          <Link to="/summary">
            <StyledSaveRoundButton onClick={saveRound}>
              Save Round
            </StyledSaveRoundButton>
          </Link>
          <Link to="/summary">
            <StyledBackButton>Back</StyledBackButton>
          </Link>
          <ResetButton onClick={resetScore}>Reset</ResetButton>
        </StyledButtonSection>
      </React.Fragment>
    )
  }

  render() {
    return <React.Fragment>{this.renderEditCard()}</React.Fragment>
  }
}
