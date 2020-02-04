import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`

const Backdrop = props => <MainContainer onClick={props.click} />
export default Backdrop
