const HomeReducer = (state, action) => {
  switch (action.type) {
    case 'DO_CHANGE_WELCOME_MESSAGE':
      return state.set('message', action.payload.welcomeMessage);
    default:
      return state;
  }
};

export default HomeReducer;
