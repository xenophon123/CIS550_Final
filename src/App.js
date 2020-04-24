import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import Business from './Business';
import Dashboard from './Dashboard';
import Search from './Search';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Business />
              )}
            />
            <Route
              exact
              path="/business"
              render={() => (
                <Business />
              )}
            />
            <Route
              exact
              path="/dashboard"
              render={() => (
                <Dashboard />
              )}
            />
            <Route
              exact
              path="/search"
              render={() => (
                <Search />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
