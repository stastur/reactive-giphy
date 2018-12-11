import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '../assets/colors'
import Media from 'react-media'
import Drawer from './Drawer'
import breakpoints from '../assets/breakpoints'

const Header = styled.header`
  grid-area: header;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primary};
`

const Main = styled.main`
  grid-area: main;
`

const Aside = styled.aside`
  grid-area: aside;
  padding: 0 1em;
  h1,
  h2,
  h3 {
    margin-top: 0;
  }
`

const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary}10;
  border-top: 1px solid ${colors.primary};
`

class Layout extends Component {
  state = {
    mobileView: false
  }
  static Header = ({ children }) => <Header>{children}</Header>
  static Main = ({ children }) => <Main>{children}</Main>
  static Aside = ({ children }) => (
    <Media query={`(max-width: ${breakpoints.medium})`}>
      {matches => {
        if (matches) {
          return <Drawer>{children}</Drawer>
        }
        return <Aside>{children}</Aside>
      }}
    </Media>
  )

  static Footer = ({ children }) => <Footer>{children}</Footer>

  render() {
    return <div className={this.props.className}>{this.props.children}</div>
  }
}

export default styled(Layout)`
  display: grid;
  grid-gap: 2em;
  min-height: 100vh;
  grid-template-areas:
    'header header header header'
    '. aside  main  .'
    'footer footer footer footer';
  grid-template-rows: min-content auto min-content;
  grid-template-columns: 0.1fr auto 1fr 0.1fr;

  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-areas:
      'header'
      'main'
      'footer';
    grid-template-columns: 1fr;
  }
`
