import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as gifsActions from '../store/actions/gifs'
import { getSubcategories } from '../store/selectors/subcategories'
import * as subCatActions from '../store/actions/subcategories'

class SubcategoriesContainer extends Component {
  componentDidMount() {
    const category = this.props.match.params.category
    this.props.loadSubcategories(category)
  }

  handleClick = subcategory => {
    const category = this.props.match.params.category
    this.props.history.push(
      `/categories/${category}/${subcategory.name_encoded}/`
    )
  }

  render() {
    const { subcategories } = this.props

    const child = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onSelect: this.handleClick,
        categories: subcategories.data
      })
    })

    return <>{child}</>
  }
}

const mapStateToProps = state => ({ subcategories: getSubcategories(state) })
const mapDispatchToProps = {
  loadContent: gifsActions.loadGifsRequest,
  loadSubcategories: subCatActions.loadSubcategoriesRequest
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SubcategoriesContainer)
)
