import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import powered from '../assets/poweredLight.png'
import Search from './Search'

const StyledLink = styled(Link)`
  height: 80%;
`

const Powered = styled.img`
  height: 100%;
`

const Header = () => {
  return (
    <>
      <StyledLink to="/">
        <Powered src={powered} alt="powered by giphy" />
      </StyledLink>
      <Search />
    </>
  )
}

export default Header
