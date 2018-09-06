import React, { Component } from 'react'
import styled from 'styled-components'

const StyledRoundBar = styled.div`
  width: 400px;
  height: 100px;
  background: white;
  border: 2px solid #ddd;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  overflow: hidden;
`

const StyledPointSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 4px solid #ddd;
  height: 100px;
  width: 100%;

  &:last-child {
    border: none;
  }
  &:first-child {
    background: #eee;
  }
`

export default class RoundBar extends Component {
  allRounds = () => {
    const { player } = this.props
    return player.score.forEach(round => {
      return <StyledPointSection>{round}</StyledPointSection>
    })
  }

  render() {
    return <StyledRoundBar>{this.allRounds()}</StyledRoundBar>
  }
}
