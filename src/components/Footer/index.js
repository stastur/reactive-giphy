import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faCode from '@fortawesome/fontawesome-free-solid/faCode'
import './style.scss'

const Footer = props => {
  return (
    <div className="footer">
      <FontAwesomeIcon icon={faCode} />
      <a href="https://github.com/Stasyanuch/reactive-giphy">Source code</a>
    </div>
  )
}

export default Footer
