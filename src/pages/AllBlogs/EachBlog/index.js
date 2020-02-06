import React, { Component } from 'react'
import styled from 'styled-components'
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
  height: 70px;
  color: ${colors.white};
  text-align: justify;
  text-justify: inter-word;
`
const ReadMore = styled.p`
  font-size: 14px;
  color: ${colors.lightBrown};
  text-decoration: underline;
  font-weight: 700;
`

class EachBlog extends Component {
  render() {
    return (
      <MainContainer>
        <Image
          src='https://res.cloudinary.com/apomarn/image/upload/v1580845805/fortified/profile_frmczx.png'
          akt='blog-pic'
        />
        <Title>title</Title>
        <Paragraph>
          paragraph here paragraph here paragraph here paragraph here paragraph here paragraph here paragraph here
          paragraph here paragraph here paragraph here paragraph here paragraph here paragraph here paragraph here
          paragraph here paragraph here paragraph here paragraph here paragraph here paragraph here paragraph here
          paragraph here paragraph here paragraph here paragraph here paragraph here paragraph here paragraph here
          paragraph here paragraph here paragraph here paragraph here paragraph here paragraph here paragraph here
          paragraph here paragraph here paragraph here paragraph here paragraph here paragraph here paragraph here
          paragraph here paragraph here paragraph here
        </Paragraph>
        <ReadMore>Read More...</ReadMore>
      </MainContainer>
    )
  }
}

export default EachBlog
