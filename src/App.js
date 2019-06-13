import { PropTypes } from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/login'
import Dashboard from './components/dashboard'

const App = ({ store, history }) => (
  <Provider store={store}>
      <Router history={history}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default App;
