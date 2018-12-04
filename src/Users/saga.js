import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import actions from './actions';
import {fetchApi} from "../helpers/api";
import searchResult from '../dump/searchUser'
import convert from 'xml-js'

export function* searchUser() {
  yield takeEvery(actions.SEARCH_USER, function*({username}) {
    // let items = yield call(fetchApi, 'get', `/UserItemSAPSet?$filter=substringof('${username}', UserName)`)
    let response = searchResult
    let jsonResponse = JSON.parse(convert.xml2json(searchResult, {compact: true, spaces: 4}))
    let users = jsonResponse.feed.entry.map((entry) => {
      return {
        userID: entry.content["m:properties"]["d:UserID"]["_text"],
        userName: entry.content["m:properties"]["d:UserName"]["_text"],
        userStatus: entry.content["m:properties"]["d:UserStatus"]["_text"],
      }
    })

    console.log(users)

    yield put({
      type: actions.SET_USER_LIST,
      payload: users
    })
  })
}

export function* fetchUser() {
  yield takeEvery(actions.FETCH_USER, function*({username}) {
    // let user = yield call(fetchApi, 'get', `/UserItemSAPSet?$filter=UserName eq '${username}'`)
    // let response = searchResult
    // let jsonResponse = JSON.parse(convert.xml2json(searchResult, {compact: true, spaces: 4}))
    let user = {
      userID: 'Nicolas Winston',
      userName: 'Nicolas Winston',
      userStatus: 'Locked in AFS',
    }


    yield put({
      type: actions.SET_USER,
      payload: user
    })
  })
}

export default function* rootSaga() {
  yield [
    fork(searchUser),
    fork(fetchUser),
  ]
}

