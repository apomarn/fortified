import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { textStyles, colors } from '../../../styles'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`
const ReadMore = styled(Link)`
  font-size: 14px;
  color: ${colors.lightBrown};
  text-decoration: underline;
  font-weight: 700;
`

class EachBlog extends Component {
  render() {
    return (
      <MainContainer>
        <Image src={this.props.image} alt='blog-pic' />
        <Title>{this.props.title}</Title>
        <Paragraph>{this.props.paragraph}</Paragraph>
        <ReadMore to={`/allblogs/${this.props.title}`}>Read More...</ReadMore>
      </MainContainer>
    )
  }
}

export default EachBlog
