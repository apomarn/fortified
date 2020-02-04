import styled from 'styled-components'
import { breakpoints, textStyles, colors } from '../../styles'

export const MainContainer = styled.div`
  position: relative;
`
export const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: ${breakpoints.desktop}px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const Title = styled.p`
  ${textStyles.h1Montserrat};
  font-weight: 700;
  color: ${colors.white};
  @media screen and (min-width: ${breakpoints.desktop}px) {
    ${textStyles.h1Montserrat};
    font-weight: 700;
    color: ${colors.white};
  }
`
export const SubHeader = styled.p`
  ${textStyles.h2DancingScript}
  color: ${colors.white};
  font-weight: 700;
  text-align: center;
`
