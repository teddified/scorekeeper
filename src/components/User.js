import React, { Component } from 'react'
import styled from 'styled-components'

const StyledUserBox = styled.div`
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export default class User extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledUserBox className="user">{this.props.player.name}</StyledUserBox>
      </React.Fragment>
    )
  }
}
