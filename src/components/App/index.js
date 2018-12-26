import React from 'react'
import { Link } from 'react-router-dom'
import CategoriesContainer from '../../containers/CategoriesContainer'
import ErrorBoundary from '../../containers/ErrorBoundary'
import Layout from '../Layout'
import Main from '../Main'
import CategoriesList from '../CategoriesList'
import Breadcrumbs from '../Breadcrumbs'
import Header from '../Header'
import Footer from '../Footer'
import './style.scss'

const App = props => {
  return (
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
}

export default App
