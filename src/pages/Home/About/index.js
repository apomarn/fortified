import React, { Component } from 'react'
import styled from 'styled-components'
import { StyledDivider } from '../../../components/Anchors/index'
import { textStyles, colors, breakpoints } from '../../../styles'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ProfilePhoto = styled.img`
  margin-top: 85px;
  height: 300px;
  width: 300px;
`

const Name = styled.p`
  ${textStyles.h2DancingScript}
  color: ${colors.lightBrown};
  margin-top: 45px;
  margin-bottom: 45px;
`
const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 45px;
  width: 300px;
`
const ImageContact = styled.img`
  width: 50px;
  height: 50px;
`
const ParagraphContainer = styled.div`
  width: 300px;
  margin-bottom: 85px;
`
const Paragraph = styled.p`
  ${textStyles.h4Montserrat}
  color: ${colors.black};
  text-indent: 30px;
  text-align: justify;
  text-justify: inter-word;
`
class About extends Component {
  render() {
    return (
      <MainContainer>
        <ProfilePhoto
          src='https://res.cloudinary.com/apomarn/image/upload/v1580845805/fortified/profile_frmczx.png'
          alt='admin-profile'
        />
        <Name>Ana Pomar</Name>
        <ContactContainer>
          <a href=''>
            <ImageContact
              src='https://res.cloudinary.com/apomarn/image/upload/v1580846305/fortified/facebook_qqbkyf.png'
              alt='facebook'
            />
          </a>
          <a href=''>
            <ImageContact
              src='https://res.cloudinary.com/apomarn/image/upload/v1580846310/fortified/instagram_i3vlzx.png'
              alt='instagram'
            />
          </a>
          <a href=''>
            <ImageContact
              src='https://res.cloudinary.com/apomarn/image/upload/v1580846311/fortified/email_k6w6qh.png'
              alt='email'
            />
          </a>
        </ContactContainer>
        <ParagraphContainer>
          <Paragraph>
            Hello everyone! My name is Ana, a 22 year old church girl with a heart for God and a heart people. Welcome
            to Fortified! A place where i want all of you beautiful ladies to feel like you have a sisterhood of young
            women that know what it feels like to be alone, broken, confused, too far gone and still come out stronger
            than ever on the other side of their struggles. My prayer for you is to be touched by what God has done in
            my life personally as well as in the lives of some extraordinary women I’ve met along the way. Let this be
            somewhere you feel understood and loved. I can’t wait for you all to get to know a little more of what God
            has done throughout all these years and even more what he will do in your days to come! God bless you.
            <br></br>
            <br></br>Your New Sis,<br></br>Ana Pomar
          </Paragraph>
        </ParagraphContainer>
        <StyledDivider />
      </MainContainer>
    )
  }
}

export default About
