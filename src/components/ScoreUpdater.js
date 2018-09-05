import React, { Component } from 'react'
import Button from './Button'
import styled from 'styled-components'

const StyledScoreUpdater = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 45px 45px;
  grid-gap: 10px;
`
export default class ScoreUpdater extends Component {
  render() {
    const { onClick } = this.props
    return (
      <StyledScoreUpdater>
        <Button onClick={() => onClick(+1)}>+1</Button>
        <Button onClick={() => onClick(+5)}>+5</Button>
        <Button onClick={() => onClick(+10)}>+10</Button>
        <Button onClick={() => onClick(-1)}>-1</Button>
        <Button onClick={() => onClick(-5)}>-5</Button>
        <Button onClick={() => onClick(-10)}>-10</Button>
      </StyledScoreUpdater>
    )
  }
}
