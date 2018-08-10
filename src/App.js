import React, { Component } from 'react'
import './App.css'
import Home from './containers/Home'
import PasswordManager from './containers/PasswordManager'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ Home }></Route>
              <Route exact path="/rpm" component={ PasswordManager }></Route>
            </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
