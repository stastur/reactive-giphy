import React from 'react'
import CategoriesContainer from '../containers/categoriesContainer'
import CategoriesView from '../components/categoriesView'
import SubcategoriesContainer from '../containers/subcategoriesContainer'

const wrapWith = Container => () => (
  <Container>
    <CategoriesView />
  </Container>
)

const CategoriesPage = wrapWith(CategoriesContainer)
const SubcategoriesPage = wrapWith(SubcategoriesContainer)

export { CategoriesPage, SubcategoriesPage }
