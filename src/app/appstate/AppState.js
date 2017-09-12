import Immutable from 'immutable';

const AppState = Immutable.fromJS({
  username: '',
  isAuthenticated: false,
});

export default AppState;
