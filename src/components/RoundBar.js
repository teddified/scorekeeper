import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledRoundBar = styled.div`
  width: 400px;
  height: 100px;
  background: white;
  border: 2px solid #ddd;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
  overflow-x: scroll;
  overflow-y: hidden;
  box-sizing: border-box;
`

const StyledPointSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 4px solid #ddd;
  height: 100px;
  width: 100px;
  min-width: 100px;

  &:first-child {
    background: #eee;
  }
`

export default class RoundBar extends Component {
  static propTypes = {
    player: PropTypes.array,
  }

  allRounds = () => {
    const { player } = this.props
    let roundscori = player.score
    roundscori = roundscori.length ? roundscori : [0]
    return (
      <React.Fragment>
        {roundscori.map((round, index) => (
          <StyledPointSection key={index}>{round}</StyledPointSection>
        ))}
      </React.Fragment>

    // <StyledPointSection>{round}</StyledPointSection>
    // <StyledPointSection key={index}>{round}</StyledPointSection>
    )
  }

  render() {
    return <StyledRoundBar>{this.allRounds()}</StyledRoundBar>
  }
}
