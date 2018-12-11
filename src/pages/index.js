import React from 'react'
import CategoriesContainer from '../containers/CategoriesContainer'
import CategoriesView from '../components/CategoriesView'
import SubcategoriesContainer from '../containers/SubcategoriesContainer'

const wrapWith = Container => () => (
  <Container>
    <CategoriesView />
  </Container>
)

const CategoriesPage = wrapWith(CategoriesContainer)
const SubcategoriesPage = wrapWith(SubcategoriesContainer)

export { CategoriesPage, SubcategoriesPage }
