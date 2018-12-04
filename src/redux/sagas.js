import { all } from 'redux-saga/effects';
import userSaga from '../Users/saga';

export default function* rootSaga(getState) {
  yield all([
    userSaga()
  ]);
}
