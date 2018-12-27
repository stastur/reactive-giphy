import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import 'normalize.css'
import { configureStore } from './store/configureStore'
import App from './components/app'
import ErrorBoundary from './containers/errorBoundary'

const store = configureStore()

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
)
