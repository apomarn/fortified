import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import EachBlog from './EachBlog'
import styled from 'styled-components'
import { colors } from '../../styles'

const MainContainer = styled.div`
  background-color: ${colors.black};
`

class AllBlogs extends Component {
  render() {
    return (
      <MainContainer>
        <Navbar />

        <EachBlog />
      </MainContainer>
    )
  }
}

export default AllBlogs
