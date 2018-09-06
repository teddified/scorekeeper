import React, { Component } from 'react'
import PlayerSetup from './PlayerSetup'
import { StyledButton } from './Button'
import styled from 'styled-components'

const StyledApp = styled.div`
  display: flex;
  background: white;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  border: 2px solid #ddd;
  border-radius: 10px;
  & > * {
    margin: 5px;
  }
`

const StyledPlayButton = styled(StyledButton)`
  width: 200px;
  height: 100px;
  font-size: 60px;
`

const InputArea = styled.div`
  height: 350px;
  width: 280px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
`

const StyledLabel = styled.div`
  height: 100px;
  color: #888;
`

const StyledListItems = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 18px;
  &:nth-child(2n) {
    background: aliceblue;
  }
  &:hover {
    text-decoration: line-through;
    color: #888;
  }
`

const StyledDeleteAllButton = styled.button`
  width: 100px;
  height: 40px;
  color: black;
  font-size: 12px;
  font-weight: bold;
  background: #ccc;
  border-radius: 10px;
`

export default class StartScreen extends Component {
  renderUsername() {
    const { players, deletePlayer } = this.props
    return (
      <React.Fragment>
        {players.map((user, index) => (
          <StyledListItems onClick={() => deletePlayer(index)} key={index}>
            {user.name}
          </StyledListItems>
        ))}
      </React.Fragment>
    )
  }

  renderCheckStartable() {
    const { players, startSummary, deleteAll } = this.props
    if (players.length > 0) {
      return (
        <React.Fragment>
          <StyledPlayButton onClick={startSummary}>Play!</StyledPlayButton>
          <StyledDeleteAllButton onClick={deleteAll}>
            Reset players
          </StyledDeleteAllButton>
        </React.Fragment>
      )
    } else {
      return <StyledLabel>Please enter player</StyledLabel>
    }
  }

  render() {
    const { addPlayer } = this.props
    return (
      <div>
        <StyledApp>
          <h1>Start Screen</h1>
          <PlayerSetup onSubmit={inputValue => addPlayer(inputValue)} />
          <InputArea>{this.renderUsername()}</InputArea>
          {this.renderCheckStartable()}
        </StyledApp>
      </div>
    )
  }
}
