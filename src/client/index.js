import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';

import LoginReducer from 'app/login/LoginReducer';
import HomeReducer from 'app/home/HomeReducer';
import App from 'app';

import '../../scss/style.scss';

const initialState = (typeof window === 'undefined' ? Immutable.fromJS({
  login: { username: 'cwtsoi', isAuthenticated: false },
  home: { welcomeMessage: 'message from client' },
}) : Immutable.fromJS(window.__INITIAL_STATE__));

const rootReducer = combineReducers({ login: LoginReducer, home: HomeReducer });

const store = createStore(
  rootReducer,
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
