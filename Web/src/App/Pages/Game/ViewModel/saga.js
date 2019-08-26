/*
  eslint-disable
    no-unused-vars,
    no-console,
    require-yield,
*/
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import * as selector from './selectors';
import { Actions } from '../Model/actions';
import { Constants } from '../Model/constants';

console.log(Actions);

function* cardClickedAsync(props) {
  console.log('in saga', props);
  yield put(Actions.AdvanceTurn());
}

function* watchCardClickedAsync() {
  yield takeLatest(Actions.CardClicked, cardClickedAsync);
}

export default function* gamePageSaga() {
  yield all([
    watchCardClickedAsync(),
  ]);
}
