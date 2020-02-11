import React, { Component } from 'react'
import styled from 'styled-components'
import { textStyles, colors } from '../../../styles'

const MainContainer = styled.div`
  padding-top: 45px;
`
const Name = styled.p`
  color: ${colors.lightBrown};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`
const Image = styled.img`
  height: 300px;
  width: 300px;
  margin: 0 auto;
`
class EachTestimony extends Component {
  render() {
    return (
      <MainContainer>
        <Name>{this.props.user_name}</Name>
        <Image src={this.props.user_image} alt='user_image' />
      </MainContainer>
    )
  }
}

export default EachTestimony
