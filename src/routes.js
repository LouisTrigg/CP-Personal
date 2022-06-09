import React, { Component } from 'react';
import Homepage from './containers/homepage.js';
import Partner from './containers/partner.js';
import Brands from './containers/brands.js';
import About from './containers/about.js';
import Life from './containers/life.js';


import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class Routes extends React.Component {

  render() {


    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/partner">
            <Partner />
          </Route>
          <Route path="/brands">
            <Brands />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/life">
            <Life />
          </Route>
        </Switch>
      </Router>
    );
  }
}
