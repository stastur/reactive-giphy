import React from 'react'
import './style.scss'

const Clipboard = props => {
  const onClick = e => {
    e.stopPropagation()
    const temp = document.createElement('textarea')
    document.body.appendChild(temp)
    temp.innerText = props.children
    temp.select()
    document.execCommand('copy')
    document.body.removeChild(temp)
  }
  return (
    <div className="copy-field" onClick={onClick}>
      copy
    </div>
  )
}

export default Clipboard
