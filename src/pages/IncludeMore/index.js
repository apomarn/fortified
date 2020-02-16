import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import styled from 'styled-components'
import { textStyles, colors } from '../../styles'

const IncludeContainer = styled.div`
  display: flex;
  padding: 45px 0;
  flex-wrap: wrap;
  justify-content: space-around;
`

const MyLink = styled(Link)`
  border: 2px solid ${colors.lightBrown};
  border-radius: 10px;
  color: ${colors.lightBrown};
  font-weight: 700;
  padding: 10px 20px;
  width: 150px;
  text-align: center;
`

class IncludeMore extends Component {
  render() {
    return (
      <div>
        <Hero />
        <IncludeContainer>
          <MyLink to='/includeblog'>
            Include <br></br>New Blog!
          </MyLink>
          <MyLink>
            Include <br></br> New Testimony!
          </MyLink>
        </IncludeContainer>
        <Footer />
      </div>
    )
  }
}

export default IncludeMore
