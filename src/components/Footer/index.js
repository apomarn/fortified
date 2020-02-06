import React, { Component } from 'react'
import styled from 'styled-components'
import { textStyles, colors, breakpoints } from '../../styles'

const MainContainer = styled.div`
  background-color: ${colors.black};
`

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 25px;
  margin-bottom: 25px;
  width: 100%;
`
const ImageContact = styled.img`
  width: 50px;
  height: 50px;
`
const BuilderInfo = styled.p`
  ${textStyles.h5Montserrat}
  color: ${colors.white};
  text-align: right;
    padding-right: 15px;
    padding-bottom: 10px;
    margin: 0;
`
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
