import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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

const StyledButtonSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default class SummaryScreen extends Component {
  static propTypes = {
    players: PropTypes.array,
    deleteAllPlayers: PropTypes.func,
  }

  render() {
    const { players, deleteAllPlayers } = this.props
    return (
      <React.Fragment>
        {players.map((player, index) => {
          return (
            <React.Fragment key={index}>
              <SummaryCard player={player} />
            </React.Fragment>
          )
        })}
        <StyledButtonSection>
          <Link to="/">
            <StyledBackButton onClick={deleteAllPlayers}>
              New Game
            </StyledBackButton>
          </Link>
          <Link to="/game">
            <StyledBackButton>Add Round</StyledBackButton>
          </Link>
        </StyledButtonSection>
      </React.Fragment>
    )
  }
}
