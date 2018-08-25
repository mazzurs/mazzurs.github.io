import React from 'react'
import ReactDOM from 'react-dom'
import './components/App.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import store from './services/store'

ReactDOM.render(
    <App store={store}/>,
  window.document.getElementById('root'))

registerServiceWorker()
