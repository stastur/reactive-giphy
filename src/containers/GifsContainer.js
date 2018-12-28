import React, { Component } from 'react'
import { connect } from 'react-redux'

import GifsBoard from '../components/gifsBoard'
import ModalGif from '../components/modalGif'
import * as gifsActions from '../store/actions/gifs'
import { getGifs } from '../store/selectors/gifs'
import { giphyService } from '../services/giphyService'

class GifsContainer extends Component {
  state = {
    offset: 0
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

  listener = () => {
    const category = this.props.match.params.category
    const subcategory = this.props.match.params.subcat
    const scrolled = window.scrollY + window.innerHeight
    if (document.body.scrollHeight === scrolled) {
      this.setState(prevState => ({
        offset: prevState.offset + giphyService.limit
      }))
      this.props.loadContent({
        category,
        subcategory,
        offset: this.state.offset
      })
    }
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
