import React, { Component } from 'react'
import { connect } from 'react-redux'
import GifsBoard from '../components/GifsBoard'
import { getGifs } from '../store/selectors/gifs'
import * as gifsActions from '../store/actions/gifs'
import ModalGif from '../components/ModalGif'
import settings from '../settings'

class GifsContainer extends Component {
  state = {
    offset: 0
  }

  listener = () => {
    const category = this.props.match.params.category
    const subcategory = this.props.match.params.subcat
    let scrolled = window.scrollY + window.innerHeight
    if (document.body.scrollHeight === scrolled) {
      this.setState(prevState => ({
        offset: prevState.offset + settings.gifsToLoad
      }))
      this.props.loadContent({
        category,
        subcategory,
        offset: this.state.offset
      })
    }
  }

  componentDidMount() {
    const category = this.props.match.params.category
    const subcategory = this.props.match.params.subcat
    this.props.loadContent({ category, subcategory })
    window.addEventListener('scroll', this.listener)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listener)
  }

  render() {
    const { gifs } = this.props
    return (
      <>
        <GifsBoard gifs={gifs} />
        {this.props.match.params.id && (
          <ModalGif id={this.props.match.params.id} />
        )}
      </>
    )
  }
}

const mapStateToProps = state => ({ gifs: getGifs(state) })
const mapDispatchToProps = {
  loadContent: gifsActions.loadGifsRequest
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GifsContainer)
