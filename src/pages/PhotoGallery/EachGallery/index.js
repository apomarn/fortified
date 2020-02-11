import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../styles'
import { StyledDivider } from '../../../components/Anchors'

const MainContainer = styled(Link)`
  padding: 0 45px;
`

const Name = styled.p`
  color: ${colors.lightBrown};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  padding: 30px 0 20px 0;
`

const Image = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 45px;
`
class EachGallery extends Component {
  render() {
    return (
      <MainContainer to={`/alltestimonies/${this.props.user_name}`}>
        <Name>{this.props.user_name}</Name>
        <Image src={this.props.user_image} alt='user_image' />
        <StyledDivider />
      </MainContainer>
    )
  }
}

export default EachGallery
