import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import Line from './line';

ReactDOM.render((
  <Router>
    <Route path="/" component={Line} />
  </Router>
), document.getElementById('chart'));

