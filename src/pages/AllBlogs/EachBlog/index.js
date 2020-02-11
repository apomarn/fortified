import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { textStyles, colors } from '../../../styles'
import { StyledDivider } from '../../../components/Anchors'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 45px;
`

const Image = styled.img`
  height: 300px;
  width: 300px;
  margin-top: 100px;
`
const Title = styled.p`
  margin: 25px 0;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.lightBrown};
`
const Paragraph = styled.p`
  ${textStyles.h4Montserrat}
  width: 300px;
  color: ${colors.white};
  overflow: hidden;
  white-space: wrap;
  width: 100%;
  height: 100px;
`
const ReadMore = styled(Link)`
  font-size: 14px;
  color: ${colors.lightBrown};
  text-decoration: underline;
  font-weight: 700;
  align-self: flex-end;
  padding: 30px 0 45px;
`

class EachBlog extends Component {
  render() {
    return (
      <MainContainer>
        <Image src={this.props.image} alt='blog-pic' />
        <Title>{this.props.title}</Title>
        <Paragraph>{this.props.paragraph}</Paragraph>
        <ReadMore to={`/allblogs/${this.props.title}`}>Read More...</ReadMore>
        <StyledDivider />
      </MainContainer>
    )
  }
}

export default EachBlog
