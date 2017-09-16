import path from 'path';
import Express from 'express';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Immutable from 'immutable';
import { createStore } from 'redux';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import http from 'http';
import socket from 'socket.io';

import App from '../app';
import LoginReducer from '../app/login/LoginReducer';

const app = new Express();
const port = process.env.PORT || 3000;
const server = http.Server(app);
// const io = socket(server);
//
// io.on('connection', socket => {
//   console.log('a user connected');
//   socket.emit('message', { userid: "1024", username: "Jacktsoi", servermessage: "good!" });
//   socket.on('message', data => {
//     console.log(data);
//   });
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
//   setInterval(() => {
//     socket.emit('message', { userid: "1000", username: "gogogo", servermessage: "yeah!" });
//   }, 1000);
// });

app.use('/static', Express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

const handleRequest = (req, res) => {

  console.log(' [x] Request for', req.url);

  const initialState = Immutable.fromJS({
    username: 'cwtsoi',
    isAuthenticated: false,
  });

  const store = createStore(LoginReducer, initialState);
  let context = {};

  const htmlcode = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Switch>
          <Route path="/" name="App" component={App} />
        </Switch>
      </StaticRouter>
    </Provider>
  );

  res.render('index', { html: htmlcode, initialState: JSON.stringify(store.getState()) });

}

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(handleRequest);

server.listen(port, (error) => {
  console.info(__dirname);
  if (error)
    console.error(error);
  else
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});
