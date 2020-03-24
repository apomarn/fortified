import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, textStyles } from '../../../styles'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 85px;
`
export const Header = styled.p`
  ${textStyles.h2DancingScript}
  color: ${colors.brown};
  font-weight: 700;
  align-self: flex-start;
  margin-left: 45px;
`
export const BlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 16px;
  color: ${colors.lightBrown};
  margin-bottom: 10px;
  font-weight: 900;
  padding-left: 45px;
`

export const Paragraph = styled.p`
  ${textStyles.h4Montserrat}
  color: ${colors.white};
  padding-left: 45px;
  padding-right: 45px;
  overflow:hidden; 
  white-space:wrap; 
  width:100%; 
  height: 100px;
`
export const AllBlogs = styled(Link)`
  font-size: 16px;
  color: ${colors.brown};
  font-weight: 900;
  text-align: right;
  padding-right: 45px;
  text-decoration: underline;
  margin-bottom: 85px;
`
