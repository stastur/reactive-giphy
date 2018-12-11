import React from 'react'
import styled from 'styled-components'
import colors from '../assets/colors'

const Homepage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Message = styled.div`
  font-size: 4em;
  font-weight: 600;
  text-shadow: 5px 0 5px #000;
  color: ${colors.primary};
`

export default () => {
  return (
    <Homepage>
      <Message>Hello there</Message>
    </Homepage>
  )
}
