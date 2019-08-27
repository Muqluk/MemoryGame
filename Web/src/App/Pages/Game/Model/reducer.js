import { fromJS } from 'immutable';
import { initialState } from './initialState';
import { Constants } from './constants';


const { GameAction } = Constants;

export const Reducer = (state = initialState, { payload = {}, type = {} }) => {
  let newState = state;
  switch (type) {
    case GameAction.NEW_GAME: {
      newState = newState.set('Cards', []);
      return newState;
    }
    case GameAction.CARD_CLICKED: {
      const card = newState
        .get('Game')
        .get('CurrentGame')
        .get('Cards')
        .get(payload)
        .toJS();

      const newCard = fromJS({
        ...card,
        isVisible: !card.isVisible,
      });

      newState = newState.setIn(['Game', 'Cards', payload], newCard);

      return newState;
    }
    case GameAction.ADVANCE_PLAYER_TURN: {
      const game = newState.get('Game').get('CurrentGame').toJS();

      try {
        const history = game.SelectionHistory;
        history[game.turnsCounter] = payload.turn;
        const gameState = {
          ...game,
          ...payload,
          SelectionHistory: history,
        }

        newState = newState.setIn(['Game', 'CurrentGame'], fromJS(gameState));
      } catch (ex) {
        console.log('ex', ex);
      }

      return newState;
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
