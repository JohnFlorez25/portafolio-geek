import React from 'react'
import styled from 'styled-components'

const StyleH3 = styled.h3`
  color: #212121;
  font-weight: bold;
  margin: 0.5em 0;
`

const StyleP = styled.p`
  color: #757575;
  font-weight: 300;
  margin: 0.5em 0 1.2em 0;
`

export const H3Styled = ({ children }) => {
  return <StyleH3>{children}</StyleH3>
}

export const PStyled = ({name}) => <StyleP>{name}</StyleP>

//export default H3Styled
