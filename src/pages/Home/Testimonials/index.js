import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, textStyles, breakpoints } from '../../../styles'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 85px;
`
const Header = styled.p`
  ${textStyles.h2DancingScript}
  color: ${colors.brown};
  font-weight: 700;
  align-self: center;
  margin-bottom: 45px;
`

const ProfilePic = styled.img`
  height: 148px;
  width: 148px;
  margin-right: 18px;
`

const TestimonialsContainer = styled.div`
  display: flex;
  padding-left: 22px;
`
const Name = styled.p`
  ${textStyles.h2DancingScript}
  color: ${colors.lightBrown};
  text-align: center;
  margin-right: 22px;
  margin-bottom: 5px;
`

const Paragraph = styled.p`
  ${textStyles.h4Montserrat}
  color: ${colors.black}
  text-align: justify;
  text-justify: inter-word;
  margin-right: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 100px;
`
const ReadMore = styled(Link)`
  font-size: 16px;
  color: ${colors.brown};
  font-weight: 900;
  float: right;
  padding-right: 22px;
  text-decoration: underline;
  margin-bottom: 85px;
`
class Testimonials extends Component {
  render() {
    return (
      <MainContainer>
        <Header>You Are Not Alone</Header>
        <TestimonialsContainer>
          <ProfilePic
            src='https://res.cloudinary.com/apomarn/image/upload/v1580845805/fortified/profile_frmczx.png'
            alt='profilepic'
          />
          <div>
            <Name>Ana Pomar</Name>
            <Paragraph>
              hola como estas hola como estas hola como estas hola como estas hola como estas hola como estas hola como
              estastas hola como hgvhj
            </Paragraph>
            <ReadMore to=''>Read More</ReadMore>
          </div>
        </TestimonialsContainer>
      </MainContainer>
    )
  }
}

export default Testimonials
