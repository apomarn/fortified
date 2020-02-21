import React, { Component } from 'react'
import { PageLogo } from './style'

class ButtonLogo extends Component {
  render() {
    return (
      <button onClick={this.props.drawerClick}>
        <PageLogo
          src='https://res.cloudinary.com/apomarn/image/upload/v1580940087/fortified/finalfinallogo_zfqkp9.png'
          alt='logo'
        />
      </button>
    )
  }
}

export default ButtonLogo
