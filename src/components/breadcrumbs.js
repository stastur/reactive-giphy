import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import '../scss/components/breadcrumbs.scss'

const useCrumbs = pathname => {
  const names = pathname.split('/').filter(item => !!item)
  const paths = names.map((item, index, arr) =>
    arr.slice(0, index + 1).join('/')
  )
  return paths.map((item, index) => ({
    name: names[index],
    path: item
  }))
}

const Breadcrumbs = props => {
  const { pathname  } = props.location
  const crumbs = useCrumbs(pathname)
  const childElements = crumbs.map(item => (
    <Link className="breadcrumb" key={item.name} to={`/${item.path}/`}>
      {item.name.toUpperCase()}
    </Link>
  ))
  return <div>{childElements}</div>
}

export default withRouter(Breadcrumbs)
