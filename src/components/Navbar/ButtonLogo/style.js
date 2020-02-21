import styled from 'styled-components'
import { breakpoints } from '../../../styles'

export const PageLogo = styled.img`
  width: 60px;
  heigth: 60px;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    width: 100px;
    heigth: 100px;
  }
`
