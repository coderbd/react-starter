const HomeReducer = (state, action) => {
  switch (action.type) {
    case 'DO_CHANGE_WELCOME_MESSAGE':
      return state.set('welcomeMessage', action.payload);
    default:
      return state;
  }
};

export default HomeReducer;
