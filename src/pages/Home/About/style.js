import styled from 'styled-components'
import { textStyles, colors } from '../../../styles'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ProfilePhoto = styled.img`
  margin-top: 85px;
  height: 300px;
  width: 300px;
`

export const Name = styled.p`
  ${textStyles.h2DancingScript}
  color: ${colors.lightBrown};
  margin-top: 45px;
  margin-bottom: 45px;
`
export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 45px;
  width: 300px;
`
export const ImageContact = styled.img`
  width: 50px;
  height: 50px;
`
export const ParagraphContainer = styled.div`
  width: 300px;
  margin-bottom: 85px;
`
export const Paragraph = styled.p`
  ${textStyles.h4Montserrat}
  color: ${colors.white};
  text-indent: 30px;
  text-align: justify;
  text-justify: inter-word;
`
