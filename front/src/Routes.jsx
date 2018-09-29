import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './containers/Search';
import NotFound from './containers/NotFound';

import { createStore } from 'redux';
import { Reducers } from './reducers';




class Routes extends Component {
  render() {
    const Store = createStore(Reducers);

    return (
      <Provider store={Store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Search} page="oi" />
          
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Routes;