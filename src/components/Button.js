import React, { Component } from 'react'
import styled from 'styled-components'

export const StyledButton = styled.button`
  border-radius: 5px;
  outline: none;
  background: white;

  &:hover {
    background: #00aced;
  }
`

export default class Button extends Component {
  render() {
    return (
      <StyledButton onClick={this.props.onClick}>
        {this.props.children}
      </StyledButton>
    )
  }
}
