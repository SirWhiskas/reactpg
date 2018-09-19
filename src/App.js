import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import StartMenu from './components/startMenu';
import Background from './components/background';
import NewGameForm from './components/newGameForm';
import Game from './components/game';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Background />
        <Switch>
          <Route path="/newGameForm" component={NewGameForm} />
          <Route path="/loadGame" />
          <Route path="/game/:characterData" component={Game} />
          <Route path="/" component={StartMenu} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
