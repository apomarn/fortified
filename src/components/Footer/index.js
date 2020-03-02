import React, { Component } from 'react'
import { MainContainer, ContactContainer, ImageContact, BuilderInfo } from './style'

class Footer extends Component {
  render() {
    return (
      <MainContainer>
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
        <BuilderInfo>Build by Anghy Pomar</BuilderInfo>
      </MainContainer>
    )
  }
}

export default Footer
