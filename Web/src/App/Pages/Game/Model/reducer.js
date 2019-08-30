/*
  eslint-disable
    no-unused-vars,
    no-console,
    max-len,
*/
import { fromJS } from 'immutable';
import { initialState } from './initialState';
import { Constants } from './constants';


const { GameAction } = Constants;

const common = {
  card: {
    get: (state, id) => (state.getIn(['Game', 'CurrentGame', 'Cards', id]).toJS()),
    update: (state, card) => (state.setIn(['Game', 'CurrentGame', 'Cards', card.cardId], fromJS(card))),
  },
  current: {
    get: (state) => (state.get('Game').get('CurrentGame').toJS()),
    history: {
      get: () => ({}),
      update: (state, turnAction) => {
        let newState = state;
        const {
          turnsCounter,
          TurnHistory,
        } = state
          .get('Game')
          .get('CurrentGame')
          .toJS();
        const { flipCount, turn } = turnAction;

        console.log(turnAction);

        newState = newState.setIn(['Game', 'CurrentGame', 'flipCount'], flipCount);

        return newState;
      },
    }
  }
}

const doLog = (state, payload, type) => {
  console.group(`${type}`);
  // console.log('CurrentGame', state.toJS().Game.CurrentGame);
  console.log('type', type);
  console.log('payload', payload);
  console.groupEnd();
  console.log();
};

export const Reducer = (state = initialState, { payload = {}, type = {} }) => {
  let newState = state;
  doLog(state, payload, type);
  switch (type) {
    case GameAction.NEW_GAME: {
      newState = newState.set('Cards', []);
      return newState;
    }
    case GameAction.CARD_CLICKED: {
      const card = common.card.get(newState, payload);
      const flipCount = newState.getIn(['Game', 'CurrentGame', 'flipCount']);
      const newCard = {
        ...card,
        isVisible: !card.isVisible,
        isLocked: card.isVisible && flipCount,
      };
      newState = common.card.update(newState, newCard);
      return newState;
    }
    case GameAction.ADVANCE_PLAYER_TURN: {
      try {
        return common.current.history.update(newState, payload);
      } catch (ex) {
        // TODO:  Add common error handler.
        console.log('ex', ex); // eslint-disable-line
        return newState;
      }
    }
    case GameAction.ADVANCE_PLAYER_TURN_SUCCESS: {
      return newState;
    }
    case GameAction.ADVANCE_PLAYER_TURN_FAILED: {
      return newState;
    }
    default:
      return state;
  }
};
