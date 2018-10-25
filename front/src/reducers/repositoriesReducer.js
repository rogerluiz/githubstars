const initialState = {
  username: '',
  history: { match: '', location: '' },
  repositories: [],
  modal: { id: 0, key: 0 },
};

export const repositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return {
        ...state,
        username: action.username
      };

    case 'UPDATE_HISTORY':
      return {
        ...state,
        history: action.history
      };

    case 'UPDATE_REPOSITORIES':
      return {
        ...state,
        repositories: action.repositories
      };

    case 'OPEN_MODAL':
      return {
        ...state,
        modal: action.modal
      };

    default:
      return state;
  }
};
