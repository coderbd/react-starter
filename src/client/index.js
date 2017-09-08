import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from 'app';

import '../../scss/style.scss';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" name="App" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app'),
);
