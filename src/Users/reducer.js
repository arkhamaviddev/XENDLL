import actions from './actions'

const initState = {
  list: [],
  user: null
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_USER_LIST:
      return {...state,  list: action.payload}
    case actions.SET_USER:
      return {...state,  user: action.payload}
    default:
      return state;
  }
}
