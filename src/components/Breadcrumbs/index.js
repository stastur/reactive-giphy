import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './style.scss'

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
      <Link className="breadcrumb" key={index} to={`/${item.path}/`}>
        {item.name.toUpperCase()}
      </Link>
    )
  })
  return <div>{childElements}</div>
}

export default withRouter(Breadcrumbs)
