import { handleActions } from 'redux-actions';
import AppState from 'app/appstate';

const LoginReducer = handleActions({
  DO_LOGIN: state => (
    state.set('isAuthenticated', true)
  ),
  DO_CHANGE_LOGIN_USERNAME: (state, { payload }) => (
    state.set('username', payload.username)
  ),
}, AppState);

export default LoginReducer;
