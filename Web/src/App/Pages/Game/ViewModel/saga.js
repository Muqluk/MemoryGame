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

function* cardClickedAsync(opt) {
  yield put(Actions.AdvanceTurn());
}

function* advanceTurnAsync(opt) {
  try {
    yield put(Actions.AdvanceTurnComplete(opt));
  } catch (ex) {
    yield put(Actions.AdvanceTurnFailed(ex));
  }
}

function* watchCardClickedAsync() {
  yield takeLatest(Constants.GameAction.CARD_CLICKED, cardClickedAsync);
}

function* watchAdvanceTurnAsync() {
  yield takeLatest(Constants.GameAction.ADVANCE_PLAYER_TURN, advanceTurnAsync);
}

export default function* gamePageSaga() {
  yield all([
    watchCardClickedAsync(),
    watchAdvanceTurnAsync(),
  ]);
}
