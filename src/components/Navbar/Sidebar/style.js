import styled from 'styled-components'
import { colors, textStyles } from '../../../styles'
import { Link } from 'react-router-dom'

export const MainContainer = styled.div`
  height: 100%;
  background-color: ${colors.black};
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Links = styled(Link)`
${textStyles.h3Montserrat}
  color: ${colors.brown};
 margin: 40px 0 40px 60px;
 text-decoration: none;
 :active {
   color: ${colors.lightBrown};
   text-decoration: none;
 }
`
