// import { all, call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { all, delay, put, select, takeLatest } from 'redux-saga/effects';

import GameSelectors from './selectors';
import { Actions } from '../Model/actions';
import { Constants } from '../Model/constants';

function* cardClickedAsync() {
  try {
    const { flipCount } = yield select(GameSelectors.CurrentGame());
    const { postTurnDelay } = yield select(GameSelectors.GameConfig());
    if (flipCount === 0) {
      yield put(Actions.AdvanceTurn());
    } else if (flipCount === 1) {
      yield put(Actions.AdvanceTurnComplete());
      yield delay(postTurnDelay);
      yield put(Actions.HideCards());
    } else {
      yield put(Actions.AdvanceTurnFailed({ message: 'flipCount out of bounds' }));
    }
  } catch (ex) {
    yield put(Actions.AdvanceTurnFailed(ex));
  }
}

function* watchCardClickedAsync() {
  yield takeLatest(Constants.GameAction.CARD_CLICKED, cardClickedAsync);
}

export default function* gamePageSaga() {
  yield all([
    watchCardClickedAsync(),
  ]);
}
