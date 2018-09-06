import React, { Component } from 'react'
import styled from 'styled-components'

const StyledPlayerHeader = styled.div`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #ddd;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
`

export default class PlayerHeader extends Component {
  render() {
    const { player } = this.props
    const total =
      player.score.reduce((acc, cur) => Number(acc) + Number(cur), 0) || 0

    return (
      <StyledPlayerHeader>
        <span>{player.name}</span>
        <span>{total}</span>
      </StyledPlayerHeader>
    )
  }
}
