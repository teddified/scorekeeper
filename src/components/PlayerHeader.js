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
  // renderTotalscore(totalscore) {
  //   return {totalscore.reduce((acc, curr)=> {
  //     return acc + curr
  //   })}
  // }

  render() {
    const { player } = this.props
    console.log(player.name)
    return (
      <StyledPlayerHeader>
        <span>{player.name}</span>
        {/* {() => this.renderTotalscore(player.score)} */}
        <span>{player.score.toString()}</span>
      </StyledPlayerHeader>
    )
  }
}
