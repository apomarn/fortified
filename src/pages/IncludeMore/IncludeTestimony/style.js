import styled from 'styled-components'
import { textStyles, colors } from '../../../styles'

export const Header = styled.p`
${textStyles.h1DancingScript}
color: ${colors.lightBrown};
padding-top: 85px;
text-align: center;
`
export const MyForm = styled.form`
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: left;
`
export const Inputs = styled.input`
  border: 2px solid ${colors.lightBrown};
  border-radius: 20px;
  padding: 10px;
`
export const Textareas = styled.textarea`
  border: 2px solid ${colors.lightBrown};
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
`
export const Subtitles = styled.p`
  font-size: 18px;
  color: ${colors.lightBrown};
  margin-top: 20px;
  margin-bottom: 10px;
`
export const SubmitButton = styled.button`
  border: 3px solid ${colors.lightBrown};
  border-radius: 20px;
  background-color: ${colors.black};
  color: ${colors.lightBrown};
  font-weight: 700;
  padding: 10px;
  width: 200px;
  margin: 40px auto;
  text-transform: uppercase;
`
