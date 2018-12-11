import React from 'react'
import { Switch, Route } from 'react-router'
import GifsContainer from '../containers/GifsContainer'
import SearchResults from './SearchResults'
import { CategoriesPage, SubcategoriesPage } from '../pages'
import Greeting from './Greeting'

const Main = props => {
  return (
    <Switch>
      <Route exact path="/" component={Greeting} />
      <Route exact path={'/categories/'} component={CategoriesPage} />
      <Route
        exact
        path={'/categories/:category/'}
        component={SubcategoriesPage}
      />
      <Route path={'/search/:searchQuery/:id?'} component={SearchResults} />
      <Route
        path={'/categories/:category/:subcat/:id?'}
        component={GifsContainer}
      />
    </Switch>
  )
}

export default Main
