import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

module.exports = (
  <Route path="/" component={Main}>
    <Router history={hashHistory} />
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);