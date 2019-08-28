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
    const newState = {};
    const currentCard = opt.payload;
    const currentGame = yield select(GameSelectors.CurrentGame());
    const { currentPlayer, flipCount, Players, SelectionHistory, turnsCounter } = currentGame;
    const latestTurn = SelectionHistory[turnsCounter - 1] || [];
    const thisTurn = SelectionHistory[turnsCounter] || {
      player: Players[currentPlayer],
      selections: [],
    };

    thisTurn.selections.push(currentCard);

    if (flipCount >= 1) {
      newState.flipCount = 0;
      newState.currentPlayer = (currentPlayer === Players.length - 1)
        ? 0
        : currentPlayer + 1;
      newState.turnsCounter = turnsCounter + 1;

      // TODO:  ok now pause x seconds and flip the un-matched cards back to face down.
    } else {
      newState.flipCount = flipCount + 1;
    }
    newState.turn = thisTurn;

    yield put(Actions.AdvanceTurn(newState));
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
