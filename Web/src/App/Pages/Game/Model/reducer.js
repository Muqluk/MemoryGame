/*
  eslint-disable
    no-console,
    function-paren-newline,
*/
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
      console.log('in reducer');
      const card = newState
        .get('Game')
        .get('Cards')
        .get(payload)
        .toJS();

      const newCard = fromJS({
        ...card,
        isVisible: !card.isVisible,
      });

      newState = newState.setIn(['Game', 'Cards', payload], newCard);

      console.log('leaving reducer');
      return newState;
    }
    case GameAction.ADVANCE_PLAYER_TURN: {
      console.log('advancing Player Turn');
      return newState;
    }
    default:
      return state;
  }
};
