import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import CategoriesContainer from '../containers/CategoriesContainer'
import ErrorBoundary from '../containers/ErrorBoundary'
import colors from '../assets/colors'
import Layout from './Layout'
import Main from './Main'
import CategoriesList from './CategoriesList'
import Breadcrumbs from './Breadcrumbs'
import Header from './Header'
import Footer from './Footer'

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${colors.fontColor};
`

const GlobalStyle = createGlobalStyle`
  body { 
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    background-color: ${colors.background};
    color: ${colors.fontColor};
  }
`

const App = props => {
  return (
    <>
      <GlobalStyle />
      <Layout className={props.className}>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Aside>
          <ErrorBoundary>
            <StyledLink to="/categories/">
              <h2>Categories</h2>
            </StyledLink>
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
