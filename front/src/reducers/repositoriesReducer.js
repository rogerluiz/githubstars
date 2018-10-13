const initialState = {
  username: ''
};

export const usernameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
};