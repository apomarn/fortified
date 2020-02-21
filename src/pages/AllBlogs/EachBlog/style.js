import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { textStyles, colors } from '../../../styles'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 45px;
`

export const Image = styled.img`
  height: 300px;
  width: 300px;
  margin-top: 100px;
`
export const Title = styled.p`
  margin: 25px 0;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.lightBrown};
`
export const Paragraph = styled.p`
  ${textStyles.h4Montserrat}
  width: 300px;
  color: ${colors.white};
  overflow: hidden;
  white-space: wrap;
  width: 100%;
  height: 100px;
`
export const ReadMore = styled(Link)`
  font-size: 14px;
  color: ${colors.lightBrown};
  text-decoration: underline;
  font-weight: 700;
  align-self: flex-end;
  padding: 30px 0 45px;
`
