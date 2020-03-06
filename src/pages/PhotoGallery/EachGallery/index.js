import React, { Component } from 'react'
import { MainContainer, Name, Image } from './style'
import { StyledDivider } from '../../../components/Anchors'

class EachGallery extends Component {
  render() {
    return (
      <MainContainer to={`/alltestimonies/photos/${this.props.user_name}`}>
        <Name>{this.props.user_name}</Name>
        <Image src={this.props.user_image} alt='user_image' />
        <StyledDivider />
      </MainContainer>
    )
  }
}

export default EachGallery
