import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Repos } from './features/Repos';
import { useDispatch } from 'react-redux';
import './App.scss';
import axios from 'axios';

const cancelTokenSource = axios.CancelToken.source();

function App() {
  const dispatch = useDispatch();


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
