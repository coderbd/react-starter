import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import Immutable from 'immutable';

import LoginReducer from 'app/login/LoginReducer';
import App from 'app';

import '../../scss/style.scss';

const initialState = Immutable.fromJS({
  username: 'jack',
  isAuthenticated: false,
});

const store = createStore(
  LoginReducer,
  initialState,
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" name="App" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
