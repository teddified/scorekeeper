import React, { Component } from 'react'
import styled from 'styled-components'

const StyledResetButton = styled.button`
  align-self: center;
  border-style: none;
  border-radius: 10px;
  background: #ee9595;

  width: 100px;
  height: 40px;
  color: #660000;
  font-size: 14px;
  font-weight: bold;
`

export default class ResetButton extends Component {
  render() {
    return (
      <StyledResetButton
        className="resetButton"
        onClick={() => this.props.onClick()}
      >
        {this.props.children}
      </StyledResetButton>
    )
  }
}
