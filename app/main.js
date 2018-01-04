// main.js
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App'
import wordApp from './reducers'

let store = createStore(wordApp)

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('app'),
  )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  const App = require('./containers/App').default
  module.hot.accept('./containers/App', () => {
    render(App)
  })
}
