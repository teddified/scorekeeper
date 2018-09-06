import React, { Component } from 'react'
import styled from 'styled-components'
import { combineReducers } from 'redux'

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
  render() {
    const { player } = this.props
    const total =
      player.score.reduce((acc, cur) => Number(acc) + Number(cur), 0) || 0
    return (
      <StyledRoundBar>
        <StyledPointSection>{total}</StyledPointSection>
        <StyledPointSection>3</StyledPointSection>
        <StyledPointSection>4</StyledPointSection>
        <StyledPointSection>2</StyledPointSection>
        <StyledPointSection>1</StyledPointSection>
        <StyledPointSection>20</StyledPointSection>
      </StyledRoundBar>
    )
  }
}
