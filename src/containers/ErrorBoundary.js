import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  componentDidCatch(err, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          An error occurred :( <br /> Try to reload the page
        </h1>
      )
    }
    return <>{this.props.children}</>
  }
}

export default ErrorBoundary
