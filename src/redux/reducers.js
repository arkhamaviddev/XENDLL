import appReducer from '../App/reducer';
import usersReducer from '../Users/reducer';
import { reducer as formReducer } from 'redux-form';

export default {
  form: formReducer,
  app: appReducer,
  usersReducer
};
