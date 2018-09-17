import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import StartMenu from './components/startMenu';
import Background from './components/background';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Background />
        <Switch>
          <Route path="/newGame" />
          <Route path="/loadGame" />
          <Route path="/" component={StartMenu} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
