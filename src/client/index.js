import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'app/Header';
import Footer from 'app/Footer';
import Test from 'app/Test';

import '../../scss/style.scss';

ReactDOM.render(
  <div><Header /><Test /><Footer /></div>,
  document.getElementById('app'),
);
