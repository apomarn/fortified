import React, { Component } from 'react'
import {
  MainContainer,
  ProfilePhoto,
  Name,
  ContactContainer,
  ImageContact,
  Paragraph,
  ParagraphContainer
} from './style'
import { StyledDivider } from '../../../components/Anchors/index'

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
          <a href='https://www.facebook.com/ana.pomar.1694'>
            <ImageContact
              src='https://res.cloudinary.com/apomarn/image/upload/v1583032689/fortified/facebook_i8h4zg.png'
              alt='facebook'
            />
          </a>
          <a href='https://www.instagram.com/_anapomar/?hl=en'>
            <ImageContact
              src='https://res.cloudinary.com/apomarn/image/upload/v1583032683/fortified/instagram_cneiym.png'
              alt='instagram'
            />
          </a>
          <a href='mailto:a_pomar13@hotmail.com'>
            <ImageContact
              src='https://res.cloudinary.com/apomarn/image/upload/v1583032686/fortified/email_wctsbf.png'
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
          </Paragraph>
        </ParagraphContainer>
        <StyledDivider />
      </MainContainer>
    )
  }
}

export default About
