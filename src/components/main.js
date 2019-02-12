import React from 'react'
import { Switch, Route } from 'react-router'

import SearchResults from './searchResults'
import Greeting from './greeting'
import GifsContainer from '../containers/gifsContainer'
import { CategoriesPage, SubcategoriesPage } from '../pages'

const Main = () => (
  <Switch>
    <Route exact path="/" component={Greeting} />
    <Route exact path="/categories/" component={CategoriesPage} />
    <Route exact path="/categories/:category/" component={SubcategoriesPage} />
    <Route path="/search/:searchQuery/:id?" component={SearchResults} />
    <Route
      path="/categories/:category/:subcat/:id?"
      component={GifsContainer}
    />
  </Switch>
)

export default Main
