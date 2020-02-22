import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, textStyles } from '../../../styles'

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
  color: ${colors.white};
  text-align: justify;
  text-justify: inter-word;
  margin-right: 22px;
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
  constructor(props) {
    super(props)
    this.state = {
      allTestimonies: []
    }
  }
  render() {
    return (
      <MainContainer>
        <Header>You Are Not Alone</Header>
        <TestimonialsContainer>
          {this.state.allTestimonies.map(testimony => {
            console.log(this.state.allTestimonies)
            return (
              <>
                <ProfilePic src={testimony.user_image} alt='profilepic' />
                <div>
                  <Name>{testimony.user_name}</Name>
                  <Paragraph>{testimony.testimony_part1}</Paragraph>
                  <ReadMore to={`/alltestimonies/${testimony.user_name}`} key={testimony._id}>
                    Read More
                  </ReadMore>
                </div>
              </>
            )
          })}
        </TestimonialsContainer>
      </MainContainer>
    )
  }
  componentDidMount() {
    var url
    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:5000'
    }

    fetch(`${url}/alltestimonies`)
      .then(data => data.json())
      .then(testimonies => {
        this.setState({ allTestimonies: testimonies })
      })
      .catch(err => console.log(err))
  }
}

export default Testimonials
