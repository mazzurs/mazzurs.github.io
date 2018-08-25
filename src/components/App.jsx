import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import MainAppContainer from './MainApp/MainAppContainer'
import ModalContainer from './Modal/ModalContainer'

class App extends Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <HashRouter>
          <div className='App'>
            <Switch>
              <Route exact path='/' render={() => (
                <Redirect to='/main/about' />
              )}
              />
              <Route
                path='/main'
                render={(obj) => {
                  return <MainAppContainer {...obj} />
                }}
              />
            </Switch>
            <ModalContainer />
          </div>
        </HashRouter>
      </Provider>
    )
  }
}

export default App
