import React, { Component } from 'react'
import { PageLogo } from './style'
import styled from 'styled-components'

const Logo = styled.button`
  border: none;
  background-color: transparent;
`
class ButtonLogo extends Component {
  render() {
    return (
      <Logo onClick={this.props.drawerClick}>
        <PageLogo src='https://res.cloudinary.com/apomarn/image/upload/v1583029398/fortified/logo.png' alt='logo' />
      </Logo>
    )
  }
}

export default ButtonLogo
