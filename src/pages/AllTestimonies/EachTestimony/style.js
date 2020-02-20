import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { colors } from '../../../styles'

export const MainContainer = styled(Link)`
  padding-top: 55px;
  display: flex;
  flex-direction: column;
  padding: 0 45px;
`
export const Name = styled.p`
  color: ${colors.lightBrown};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  padding: 30px 0 20px 0;
`
export const Image = styled.img`
  height: 300px;
  width: 300px;
  border-radsius: 10px;
`
export const ReadMore = styled(Link)`
  font-size: 14px;
  color: ${colors.lightBrown};
  text-decoration: underline;
  font-weight: 700;
  align-self: flex-end;
  padding: 30px 0 45px;
`
