import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Repos } from './features/Repos';
import './App.scss';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Repos />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
