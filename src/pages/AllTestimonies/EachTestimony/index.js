import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { textStyles, colors } from '../../../styles'
import { StyledDivider } from '../../../components/Anchors'

const MainContainer = styled(Link)`
  padding-top: 55px;
  display: flex;
  flex-direction: column;
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
  height: 300px;
  width: 300px;
  border-radsius: 10px;
`
const ReadMore = styled(Link)`
  font-size: 14px;
  color: ${colors.lightBrown};
  text-decoration: underline;
  font-weight: 700;
  align-self: flex-end;
  padding: 30px 0 45px;
`

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
