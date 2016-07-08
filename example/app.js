import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import Line from './line';
import Bar from './bar';
import Pie from './pie';
import Graph from './graph';
import Scatter from './scatter';

ReactDOM.render((
  <Router>
    <Route path="/" component={Line} />
    <Route path="/bar" component={Bar} />
    <Route path="/pie" component={Pie} />
    <Route path="/graph" component={Graph} />
    <Route path="/scatter" component={Scatter} />
  </Router>
), document.getElementById('chart'));

