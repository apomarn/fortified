import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../styles'

export const MainContainer = styled(Link)`
  padding: 0 45px;
`

export const Name = styled.p`
  color: ${colors.lightBrown};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  padding: 0px 0 20px 0;
`

export const Image = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 45px;
`
