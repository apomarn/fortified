import React, { Component } from 'react'
import { MainContainer, ContactContainer, ImageContact, BuilderInfo } from './style'

class Footer extends Component {
  render() {
    return (
      <MainContainer>
        <ContactContainer>
          <a href='https://www.facebook.com/ana.pomar.1694'>
            <ImageContact
              src='https://res.cloudinary.com/apomarn/image/upload/v1580846305/fortified/facebook_qqbkyf.png'
              alt='facebook'
            />
          </a>
          <a href='https://www.instagram.com/_anapomar/?hl=en'>
            <ImageContact
              src='https://res.cloudinary.com/apomarn/image/upload/v1580846310/fortified/instagram_i3vlzx.png'
              alt='instagram'
            />
          </a>
          <a href='mailto:a_pomar13@hotmail.com'>
            <ImageContact
              src='https://res.cloudinary.com/apomarn/image/upload/v1580846311/fortified/email_k6w6qh.png'
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
