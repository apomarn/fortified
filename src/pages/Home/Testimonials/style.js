import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
  align-self: center;
  margin-bottom: 45px;
`

export const ProfilePic = styled.img`
  height: 148px;
  width: 148px;
  margin-right: 18px;
`

export const TestimonialsContainer = styled.div`
  display: flex;
  padding-left: 22px;
`
export const Name = styled.p`
  ${textStyles.h2DancingScript}
  color: ${colors.lightBrown};
  text-align: center;
  margin-right: 22px;
  margin-bottom: 5px;
`

export const Paragraph = styled.p`
  ${textStyles.h4Montserrat}
  color: ${colors.white};
  text-align: justify;
  text-justify: inter-word;
  margin-right: 22px;
  overflow: hidden;
  max-height: 100px;
`
export const ReadMore = styled(Link)`
  font-size: 16px;
  color: ${colors.brown};
  font-weight: 900;
  float: right;
  padding-right: 22px;
  text-decoration: underline;
  margin-bottom: 85px;
`
