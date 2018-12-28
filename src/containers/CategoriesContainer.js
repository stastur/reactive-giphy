import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import * as subCatActions from '../store/actions/subcategories'
import * as catActions from '../store/actions/categories'
import { getCategories } from '../store/selectors/categories'

class CategoriesContainer extends Component {
  componentDidMount() {
    this.props.loadCategories()
  }

  handleClick = ({ name_encoded }) => {
    this.props.history.push(`/categories/${name_encoded}`)
    this.props.loadSubcategories(name_encoded)
  }

  render() {
    const { categories, children } = this.props

    const child = React.Children.map(children, item =>
      React.cloneElement(item, {
        onSelect: this.handleClick,
        categories
      })
    )

    return <>{child}</>
  }
}

const mapStateToProps = state => ({ categories: getCategories(state) })
const mapDispatchToProps = {
  loadSubcategories: subCatActions.loadSubcategoriesRequest,
  loadCategories: catActions.loadCategoriesRequest
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CategoriesContainer)
)
