export const updateUsername = value => ({
  type: 'UPDATE_USERNAME',
  username: value
});

export const updateRepositories = value => ({
  type: 'UPDATE_REPOSITORIES',
  repositories: value
});

export const updateHistory = value => ({
  type: 'UPDATE_HISTORY',
  history: value
});

export const openModal = value => ({
  type: 'OPEN_MODAL',
  modal: value
});