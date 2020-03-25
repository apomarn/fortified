import React, { Component } from 'react'
import { MainContainer, Header, ProfilePic, TestimonialsContainer, Name, Paragraph, ReadMore } from './style'

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
