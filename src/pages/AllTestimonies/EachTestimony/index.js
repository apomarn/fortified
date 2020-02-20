import React, { Component } from 'react'
import { StyledDivider } from '../../../components/Anchors'
import { MainContainer, Name, Image, ReadMore } from './style'

class EachTestimony extends Component {
  render() {
    return (
      <MainContainer to={`/alltestimonies/${this.props.user_name}`}>
        <Name>{this.props.user_name}</Name>
        <Image src={this.props.user_image} alt='user_image' />
        <ReadMore to={`/alltestimonies/${this.props.user_name}`}>Read More...</ReadMore>
        <StyledDivider />
      </MainContainer>
    )
  }
}

export default EachTestimony
