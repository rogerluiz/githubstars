import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './containers/Search';
import NotFound from './containers/NotFound';
import Repositories from './containers/Repositories';

import { loadState, saveState } from './localStorage';
import { Reducers } from './reducers';

class Routes extends Component {
  render() {
    const persistedState = loadState();
    const store = createStore(Reducers, persistedState);

    window.store = store;

    store.subscribe(() => {
      saveState(store.getState());
    });

    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/repositories" component={Repositories} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Routes;