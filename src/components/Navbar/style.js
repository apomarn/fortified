import styled from 'styled-components'
import { breakpoints, textStyles, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const MainContainer = styled.div`
  width: 100%;
  position: absolute;

  top: 0px;
  left: 0px;
  padding-left: 20px;
  padding-top: 10px;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgb(250, 250, 250, 40%);
  }
`

export const PageLogo = styled.img`
  width: 60px;
  heigth: 60px;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    width: 100px;
    heigth: 100px;
  }
`
export const Links = styled(Link)`
  ${textStyles.h3Montserrat}
  color: white;
  font-weight: 700;
  :hover {
    cursor: pointer;
    color: ${colors.brown};
    text-decoration: none;
  }
`
