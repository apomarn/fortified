import styled from 'styled-components'
import { colors, textStyles } from '../../styles'

export const MainContainer = styled.div`
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;
  padding-top: 85px;
`

export const ProfilePic = styled.img`
  width: 300px;
  height: 300px;
  margin: 0 auto;
`

export const Name = styled.p`
${textStyles.h2DancingScript}
color: ${colors.lightBrown};
text-align: center;
margin: 45px 22px 45px 5px;
`

export const Paragraph = styled.p`
${textStyles.h4Montserrat}
color: ${colors.white};
text-align: justify;
text-justify: inter-word;
margin: 15px 50px;
`
