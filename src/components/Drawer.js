import React, { useState } from 'react'
import styled from 'styled-components'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import colors from '../assets/colors'

const Drawer = props => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <SwipeableDrawer
      open={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
    >
      <div className={props.className}>{props.children}</div>
    </SwipeableDrawer>
  )
}

export default styled(Drawer)`
  background-color: ${colors.background};
  padding: 1em;
  height: inherit;
  border-right: 1px solid ${colors.primary};
`
