/*
  eslint-disable
    no-unused-vars,
    no-console,
    require-yield,
    no-debugger,
*/
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import * as selector from './selectors';
import { Actions } from '../Model/actions';
import { Constants } from '../Model/constants';

console.log(Actions);

function* cardClickedAsync(opt) {
  console.log('in cardClickedAsync', opt);
  debugger;
  yield put(Actions.AdvanceTurn());
}

function* advanceTurnAsync(opt) {
  console.log('in advanceTurnAsync', opt);
  try {
    debugger;
    yield put(Actions.AdvanceTurnComplete(opt));
  } catch (ex) {
    yield put(Actions.AdvanceTurnFailed(ex));
  }
}

function* watchCardClickedAsync() {
  yield takeLatest(Actions.CardClicked, cardClickedAsync);
}

function* watchAdvanceTurnAsync() {
  // yield takeLatest(Actions.AdvanceTurn, advanceTurnAsync);
}

export default function* gamePageSaga() {
  yield all([
    watchCardClickedAsync(),
    watchAdvanceTurnAsync(),
  ]);
}
