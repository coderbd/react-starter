import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'app/header';
import Footer from 'app/footer';
import Home from 'app/home';
import User from 'app/user';
import Test from 'app/test';

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/home" name="home" component={Home} />
      <Route exact path="/user" name="user" component={User} />
      <Route exact path="/test" name="test" component={Test} />
      <Redirect from="/" to="/test" />
    </Switch>
    <Footer />
  </div>
);

export default App;
