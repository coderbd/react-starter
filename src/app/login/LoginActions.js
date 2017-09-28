export const doLogin = () => ({
  type: 'DO_LOGIN',
});

export const doChangeLoginUsername = username => ({
  type: 'DO_CHANGE_LOGIN_USERNAME',
  payload: username,
});