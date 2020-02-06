import React, { Component } from 'react'
import styled from 'styled-components'
import { StyledDivider } from '../../../components/Anchors'
import { colors, textStyles, breakpoints } from '../../../styles'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 85px;
`
const Header = styled.p`
  ${textStyles.h2DancingScript}
  color: ${colors.brown};
  font-weight: 700;
  align-self: flex-start;
  margin-left: 45px;
`
const BlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 16px;
  color: ${colors.lightBrown};
  margin-bottom: 10px;
  font-weight: 900;
  padding-left: 45px;
`

const Paragraph = styled.p`
  ${textStyles.h4Montserrat}
  color: ${colors.white};
  text-align: justify;
  text-justify: inter-word;
  padding-left: 45px;
  padding-right: 45px;
  height: 60px;
`
const AllBlogs = styled.p`
  font-size: 16px;
  color: ${colors.brown};
  font-weight: 900;
  text-align: right;
  padding-right: 45px;
  text-decoration: underline;
  margin-bottom: 85px;
`

class PreviewBlog extends Component {
  render() {
    return (
      <MainContainer>
        <Header>Recent Blogs...</Header>
        <BlogsContainer>
          <div>
            <Title>Titulo</Title>
            <Paragraph>Parrafo kuy srgar uyg fawl iruf wleiufg fkre ufgw fweufg wef ukrwy fvawr </Paragraph>
          </div>
          <div>
            <Title>Titulo</Title>
            <Paragraph>Parrafo kuysrgaruygfawlirufgwleiufg fkreufgw fweufgwef ukrwyfvawr </Paragraph>
          </div>
        </BlogsContainer>
        <AllBlogs>All Blogs</AllBlogs>
        <StyledDivider />
      </MainContainer>
    )
  }
}

export default PreviewBlog
