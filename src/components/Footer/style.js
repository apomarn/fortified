import styled from 'styled-components'
import { textStyles, colors } from '../../styles'

export const MainContainer = styled.div`
  background-color: #5e5c40;
  left: 0;
  right: 0;
`

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 25px;
  margin-bottom: 25px;
  width: 100%;
`
export const ImageContact = styled.img`
  width: 50px;
  height: 50px;
`
export const BuilderInfo = styled.p`
  ${textStyles.h5Montserrat}
  color: ${colors.white};
  text-align: right;
    padding-right: 15px;
    padding-bottom: 10px;
    margin: 0;
`
