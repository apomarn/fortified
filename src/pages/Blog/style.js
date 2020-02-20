import styled from 'styled-components'
import { textStyles, colors } from '../../styles'

export const MainContainer = styled.div`
  background-color: ${colors.black};
  padding-top: 100px;
  padding-bottom: 50px;
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`
export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin: 0 auto;
`
export const Title = styled.p`
  top: 50%;
  transform: translate(0%, -50%);
  position: absolute;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.lightBrown};
  text-align: center;
  background-color: ${colors.black};
  width: 100%;
  padding: 10px 0;
`
export const Date = styled.p`
${textStyles.h4Montserrat}
  color: ${colors.white};
  margin: 0 50px;
  text-align: right;
  padding-top: 15px;
`

export const Paragraph = styled.p`
${textStyles.h4Montserrat}
color: ${colors.white};
 margin: 20px 50px;
 text-align: justify;
`
