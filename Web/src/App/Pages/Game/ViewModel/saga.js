/*
  eslint-disable
    no-unused-vars,
    no-console,
    require-yield,
    no-debugger,
*/
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import GameSelectors from './selectors';
import { Actions } from '../Model/actions';
import { Constants } from '../Model/constants';

function* cardClickedAsync(opt) {
  try {
    console.log('saga click', opt);
    const currentGame = yield select(GameSelectors.CurrentGame());
    if (currentGame.flipCount === 0) {
      yield put(Actions.AdvanceTurn());
    } else {
      yield put(Actions.AdvanceTurnSuccess());
    }
  } catch (ex) {
    console.log('ex', ex);
    yield put(Actions.AdvanceTurnFailed(ex));
  }
}

function* advanceTurnAsync(opt) {
  yield put(Actions.AdvanceTurnComplete());
}

function* watchCardClickedAsync() {
  yield takeLatest(Constants.GameAction.CARD_CLICKED, cardClickedAsync);
}

// function* watchAdvanceTurnAsync() {
//   yield takeLatest(Constants.GameAction.ADVANCE_PLAYER_TURN, advanceTurnAsync);
// }

export default function* gamePageSaga() {
  yield all([
    watchCardClickedAsync(),
    // watchAdvanceTurnAsync(),
  ]);
}
