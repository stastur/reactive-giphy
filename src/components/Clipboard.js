import React from 'react'
import styled from 'styled-components'

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
    <div className={props.className} onClick={onClick}>
      copy
    </div>
  )
}

export default styled(Clipboard)`
  position: absolute;
  z-index: 2;
  text-align: center;
  width: 100%;
  background: linear-gradient(#000, transparent);
  cursor: pointer;
`
