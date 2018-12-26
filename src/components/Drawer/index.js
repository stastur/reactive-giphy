import React, { useState } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import './style.scss'

const Drawer = props => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <SwipeableDrawer
      open={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
    >
      <div className="drawer-content">{props.children}</div>
    </SwipeableDrawer>
  )
}

export default Drawer
