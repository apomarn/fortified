import React, { Component } from 'react'
import Carousel from 'nuka-carousel'
// import styled from 'styled-components'

class Hero extends Component {
  render() {
    return (
      <>
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
      </>
    )
  }
}

export default Hero
