import React, { Component } from 'react'
import EditCard from './EditCard'
import ResetButton from './ResetButton'
import styled from 'styled-components'
import SummaryScreen from './SummaryScreen'

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
  state = {
    showSummary: true,
  }

  renderEditCard() {
    console.log('edit')
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
            <EditCard
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

  renderSummary() {
    const { players } = this.props
    return <SummaryScreen players={players} />
  }

  render() {
    return (
      <React.Fragment>
        {this.state.showSummary ? this.renderSummary() : this.renderEditCard()}
      </React.Fragment>
    )
  }
}
