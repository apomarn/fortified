import React, { Component } from 'react'
import Carousel from 'nuka-carousel'
import Media from 'react-media'
import { MainContainer, TitleContainer, Title, SubHeader } from './style'
import { breakpoints } from '../../styles'
import Navbar from '../Navbar'

class Hero extends Component {
  render() {
    return (
      <>
        <Media query={`(max-width: ${breakpoints.desktop}px)`}>
          {matches =>
            matches ? (
              <MainContainer>
                <Carousel withoutControls autoplay={true}>
                  <img
                    src='https://res.cloudinary.com/apomarn/image/upload/v1580715339/fortified/hero.png'
                    width='100%'
                    height='896px'
                    alt='hero1'
                  />
                  <img
                    src='https://res.cloudinary.com/apomarn/image/upload/v1578420177/abnb/Imageapt1_qzynuw.png'
                    width='100%'
                    height='896px'
                    alt='hero2'
                  />
                  <img
                    src='https://res.cloudinary.com/apomarn/image/upload/v1559144034/WeDo/guest-list-container.jpg'
                    width='100%'
                    height='896px'
                    alt='hero3'
                  />
                  <img
                    src='https://res.cloudinary.com/apomarn/image/upload/v1559144034/WeDo/share-container.jpg'
                    width='100%'
                    height='896px'
                    alt='hero4'
                  />
                </Carousel>
                <Navbar />
                <TitleContainer>
                  <Title>FORTIFIED</Title>
                  <SubHeader>Isaiah 40:31</SubHeader>
                </TitleContainer>
              </MainContainer>
            ) : (
              <MainContainer>
                <Carousel withoutControls autoplay={true}>
                  <img
                    src='https://res.cloudinary.com/apomarn/image/upload/v1580715339/fortified/hero.png'
                    width='100%'
                    height='620px'
                    alt='hero1'
                  />
                  <img
                    src='https://res.cloudinary.com/apomarn/image/upload/v1578420177/abnb/Imageapt1_qzynuw.png'
                    width='100%'
                    height='620px'
                    alt='hero2'
                  />
                  <img
                    src='https://res.cloudinary.com/apomarn/image/upload/v1559144034/WeDo/guest-list-container.jpg'
                    width='100%'
                    height='620px'
                    alt='hero3'
                  />
                  <img
                    src='https://res.cloudinary.com/apomarn/image/upload/v1559144034/WeDo/share-container.jpg'
                    width='100%'
                    height='620px'
                    alt='hero4'
                  />
                </Carousel>
                <Navbar />
                <TitleContainer>
                  <Title>FORTIFIED</Title>
                  <SubHeader>Isaiah 40:31</SubHeader>
                </TitleContainer>
              </MainContainer>
            )
          }
        </Media>
      </>
    )
  }
}

export default Hero
