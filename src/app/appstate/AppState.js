import Immutable from 'immutable';

const AppState = Immutable.fromJS({
  login: { username: '', isAuthenticated: false },
  home: { welcomeMessage: '' },
});

export default AppState;
