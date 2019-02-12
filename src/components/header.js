import React from 'react'
import { Link } from 'react-router-dom'

import Search from './search'
import powered from '../assets/poweredLight.png'
import '../scss/components/header.scss'

const Header = () => (
  <>
    <Link className="logo-link" to="/">
      <img src={powered} alt="powered by giphy" />
    </Link>
    <Search />
  </>
)

export default Header
