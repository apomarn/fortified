import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, textStyles, breakpoints } from '../../../styles'

const MainContainer = styled.div`
  width: 100%
  display: flex;
`

class PreviewBlog extends Component {
  render() {
    return (
      <MainContainer>
        <p>Recent Blogs</p>
        <div>
          <p>Titulo</p>
          <p>Parrafo kuysrgaruygfawlirufgwleiufg fkreufgw fweufgwef ukrwyfvawr </p>
        </div>
        <div>
          <p>Titulo</p>
          <p>Parrafo kuysrgaruygfawlirufgwleiufg fkreufgw fweufgwef ukrwyfvawr </p>
        </div>
      </MainContainer>
    )
  }
}

export default PreviewBlog
