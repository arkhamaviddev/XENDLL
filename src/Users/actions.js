const actions = {
  SEARCH_USER: 'SEARCH_USER',
  SET_USER: 'SET_USER',
  SET_USER_LIST: 'SET_USER_LIST',
  FETCH_USER: 'FETCH_USER',

  searchUser: (username) => {
    return  {
      type: actions.SEARCH_USER,
      username
    }
  },
  fetchUser: (username) => {
    return  {
      type: actions.FETCH_USER,
      username
    }
  },
  setUserList: (userList) => {
    return  {
      type: actions.SET_USER_LIST,
      payload: userList
    }
  },
}

export default actions
