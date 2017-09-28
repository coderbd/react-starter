const LoginReducer = (state, action) => {
  switch (action.type) {
    case 'DO_LOGIN':
      return state.set('isAuthenticated', true);
    case 'DO_CHANGE_LOGIN_USERNAME':
      return state.set('username', action.payload.username);
    default:
      return state;
  }
};

export default LoginReducer;
