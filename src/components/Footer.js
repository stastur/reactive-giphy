import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faCode from '@fortawesome/fontawesome-free-solid/faCode'
import colors from '../assets/colors'

const Footer = props => {
  return (
    <div className={props.className}>
      <FontAwesomeIcon icon={faCode} />
      <a href="https://github.com/Stasyanuch/reactive-giphy">Source code</a>
    </div>
  )
}

export default styled(Footer)`
  padding: 1em 0;
  & a {
    text-decoration: none;
    padding: 0 5px;
    color: ${colors.fontColor};
    &:hover {
      color: ${colors.primary};
    }
  }
`
