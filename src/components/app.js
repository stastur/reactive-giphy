import React from 'react'
import { Link } from 'react-router-dom'

import CategoriesContainer from '../containers/categoriesContainer'
import ErrorBoundary from '../containers/errorBoundary'
import Layout from './layout'
import Main from './main'
import CategoriesList from './categoriesList'
import Breadcrumbs from './breadcrumbs'
import Header from './header'
import Footer from './footer'
import '../scss/components/app.scss'

const App = props => (
  <>
    <Layout className={props.className}>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Aside>
        <ErrorBoundary>
          <Link className="categories-link" to="/categories/">
            <h2>Categories</h2>
          </Link>
          <CategoriesContainer>
            <CategoriesList />
          </CategoriesContainer>
        </ErrorBoundary>
      </Layout.Aside>
      <Layout.Main>
        <ErrorBoundary>
          <Breadcrumbs />
          <Main />
        </ErrorBoundary>
      </Layout.Main>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  </>
)

export default App
