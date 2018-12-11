import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../assets/colors'

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2em;
  color: ${colors.fontColor};
  & :hover {
    color: ${colors.primary};
  }
  & :after {
    content: '/';
  }
`

const useCrumbs = pathname => {
  const names = pathname.split('/').filter(item => !!item)
  const paths = names.map((item, index, arr) => {
    return arr.slice(0, index + 1).join('/')
  })
  return paths.map((item, index) => {
    return {
      name: names[index],
      path: item
    }
  })
}

const Breadcrumbs = props => {
  const crumbs = useCrumbs(props.location.pathname)
  const childElements = crumbs.map((item, index) => {
    return (
      <StyledLink key={index} to={`/${item.path}/`}>
        {item.name.toUpperCase()}
      </StyledLink>
    )
  })
  return <div>{childElements}</div>
}

export default withRouter(Breadcrumbs)
