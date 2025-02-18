import { put, takeLatest, all } from 'redux-saga/effects';
import actionTypes from '../actions/types';

function* fetchNews() {
  const json = yield fetch(
    'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc'
  ).then(response => response.json());

  yield put({ type: actionTypes.NEWS_RECEIVED, json: json.articles });
}

function* actionWatcher() {
  yield takeLatest(actionTypes.GET_NEWS, fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
