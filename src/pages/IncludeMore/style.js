import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const MainContainer = styled.div`
  height: auto;
`
export const IncludeContainer = styled.div`
  display: flex;
  padding: 45px 0;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const MyLink = styled(Link)`
  border: 2px solid ${colors.lightBrown};
  border-radius: 10px;
  color: ${colors.lightBrown};
  font-weight: 700;
  padding: 10px 20px;
  width: 150px;
  text-align: center;
`
