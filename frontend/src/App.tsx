import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Landing from './pages/Landing';
import Premium from './pages/Premium';
import Insurance from './pages/Insurance';
import Benefit from './pages/Benefit';
import history from './history';
import './App.css';

type Props = {}

class App extends Component<Props> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Landing}></Route>
          <Route exact path='/premium' component={Premium}></Route>
          <Route exact path='/insurance' component={Insurance}></Route>
          <Route exact path='/benefit' component={Benefit}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
