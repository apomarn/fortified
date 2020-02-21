import React, { Component } from 'react'
import { StyledDivider } from '../../../components/Anchors'
import { MainContainer, Image, Title, Paragraph, ReadMore } from './style'

class EachBlog extends Component {
  render() {
    return (
      <MainContainer>
        <Image src={this.props.image} alt='blog-pic' />
        <Title>{this.props.title}</Title>
        <Paragraph>{this.props.paragraph_1}</Paragraph>
        <ReadMore to={`/allblogs/${this.props.title}`}>Read More...</ReadMore>
        <StyledDivider />
      </MainContainer>
    )
  }
}

export default EachBlog
